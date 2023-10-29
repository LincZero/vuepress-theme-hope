import type { PropType, VNode } from "vue";
import { defineComponent, h, ref, watch } from "vue";
import { useRoute } from "vue-router";

import SidebarChild from "@theme-hope/modules/sidebar/components/SidebarChild";
import SidebarGroup from "@theme-hope/modules/sidebar/components/SidebarGroup";
import { isMatchedSidebarItem } from "@theme-hope/modules/sidebar/utils/index";

import type { ResolvedSidebarItem } from "../utils/index.js";

import "../styles/sidebar-links.scss";

export default defineComponent({
  name: "SidebarLinks",

  props: {
    /**
     * Sidebar links config
     *
     * 侧边栏链接配置
     */
    config: {
      type: Array as PropType<ResolvedSidebarItem[]>,
      required: true,
    },

    /**
     * Is the sidebar folds automatically
     *
     * 侧边栏是否自动折叠
     */
    isAutoFold: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const route = useRoute();
    const openGroupIndices = ref(props.isAutoFold ? [-1] : []);

    const toggleGroup = (index: number): void => {
      if (props.isAutoFold) {
        openGroupIndices.value = [index];
      } else {
        const currentIndex = openGroupIndices.value.indexOf(index);

        if (currentIndex === -1) openGroupIndices.value.push(index);
        else openGroupIndices.value.splice(currentIndex, 1);
      }
    };

    watch(
      () => route.path,
      (): void => {
        const index = props.config.findIndex((item) =>
          isMatchedSidebarItem(route, item),
        );

        if (!props.isAutoFold && !openGroupIndices.value.includes(index))
          openGroupIndices.value.push(index);
      },
      { immediate: true, flush: "post" },
    );

    return (): VNode | null =>
      h(
        "ul",
        { class: "vp-sidebar-links" },
        props.config.map((config, index) =>
          h(
            "li",
            config.type === "group"
              ? h(SidebarGroup, {
                  config,
                  open: openGroupIndices.value.includes(index),
                  onToggle: () => toggleGroup(index),
                })
              : h(SidebarChild, { config }),
          ),
        ),
      );
  },
});
