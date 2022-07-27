import { computed, defineComponent } from "vue";
import "./styles/caret.less";
const ANIMATION_CLASS_PREFIX = "vue-typer-caret-";

interface Caret {
  animation: string;
}

export default defineComponent({
  props: {
    /**
     *
     * Caret animation similar to Sublime and VSCode: 'solid', 'blink', 'smooth', 'phase', 'expand'.
     */
    animation: {
      type: String,
      default: "blink",
      validator: (value: string) =>
        /^solid$|^blink$|^smooth$|^phase$|^expand$/.test(value),
    },
  },
  setup(props) {
    let animationClass = computed(() => {
      return ANIMATION_CLASS_PREFIX + props.animation;
    });
    return () => {
      return <span class={["caret", "custom", animationClass]}></span>;
    };
  },
});
