import { defineComponent } from "vue";
import { ElButton } from 'element-plus'

export default defineComponent({
  components: {},
  props: {},
  emits: [],
  setup(props, ctx) {
    return () => <div><ElButton type="primary">Primary</ElButton></div>;
  },
});
