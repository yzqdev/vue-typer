import { computed, defineComponent } from "vue";

import "./styles/char.less";
export default defineComponent({
  props: {
    val: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    return () => {
      let classes = computed(() => {
        return {
          newline: props.val.includes("\n"),
        };
      });
      return <span class={["char", classes]}>{props.val}</span>;
    };
  },
});
