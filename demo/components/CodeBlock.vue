<template>
  <pre class="code-block">

     <highlightjs
         :language="language"
         :code="code"
     />
  </pre>
</template>

<script>
export default {
  props: {
    code: String,
    language: String,
  },
  computed: {},

  methods: {},
};
</script>

<style scoped lang="less">
.code-block {
  background: white;
  padding: 20px;
  height: auto;
}
</style>
