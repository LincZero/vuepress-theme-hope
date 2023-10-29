import type { Router } from "vue-router";
import {
  inferRouteLink,
  resolveRouteWithRedirect,
} from "vuepress-shared/client";

import type { AutoLinkOptions } from "../../shared/index.js";
import { ArticleInfoType } from "../../shared/index.js";

/**
 * Resolve AutoLink props from string
 *
 * Use the file name in preference to the h1 name
 * 优先使用文件名而非h1的名字
 */
export const resolveLinkInfo = (
  router: Router,
  item: string,
  preferFull = false,
): AutoLinkOptions => {
  let result = resolveRouteWithRedirect(
    router,
    inferRouteLink(encodeURI(item)),
  );

  // the inferred path may be wrong, so we need to resolve the original path
  if (result.name === "404") result = resolveRouteWithRedirect(router, item);

  const { fullPath, meta, name } = result;

  function getLastPartOfPath(path: string) {
    const lastSlashIndex = path.lastIndexOf("/");

    if (lastSlashIndex === -1) return path;
    else return path.substring(lastSlashIndex + 1);
  }

  return {
    text:
      !preferFull && meta[ArticleInfoType.shortTitle]
        ? meta[ArticleInfoType.shortTitle]
        : getLastPartOfPath(item) || meta[ArticleInfoType.title],
    link: name === "404" ? item : fullPath,
    ...(meta[ArticleInfoType.icon] ? { icon: meta[ArticleInfoType.icon] } : {}),
  };
};
