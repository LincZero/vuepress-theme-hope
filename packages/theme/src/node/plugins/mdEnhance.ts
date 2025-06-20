import type { Plugin } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

import type { ThemeMarkdownOptions } from "../typings/index.js";

export const getMdEnhancePlugin = (
  {
    chartjs = false,
    echarts = false,
    flowchart = false,
    markmap = false,
    mermaid = false,
    plantuml = false,
    demo = false,
    playground,
    sandpack = false,
    vuePlayground = false,
    kotlinPlayground = false,
  }: ThemeMarkdownOptions,
  compact: boolean,
): Plugin | null => {
  if (
    !chartjs &&
    !echarts &&
    !flowchart &&
    !markmap &&
    !mermaid &&
    !plantuml &&
    !demo &&
    !playground &&
    !sandpack &&
    !vuePlayground &&
    !kotlinPlayground
  ) {
    return null;
  }

  return mdEnhancePlugin(
    {
      chartjs,
      demo,
      echarts,
      flowchart,
      kotlinPlayground,
      markmap,
      mermaid,
      plantuml,
      playground,
      sandpack,
      vuePlayground,
    },
    compact,
  );
};
