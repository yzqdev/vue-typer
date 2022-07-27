<template>
  <header>
    <h1>
      <vue-typer
        class="title-typer"
        text="VueTyper"
        :repeat="0"
        :pre-type-delay="1000"
        :type-delay="400"
        caret-animation="smooth"
      ></vue-typer>
    </h1>
    <div class="link-bar">
      <circle-link href="https://github.com/cngu/vue-typer"
        ><img src="../assets/images/github-mark-light.png" /></circle-link
      ><circle-link
        href="https://github.com/cngu/vue-typer/blob/master/README.md#getting-started"
        ><img src="../assets/images/documentation-light.png" /></circle-link
      ><circle-link href="https://api.github.com/repos/cngu/vue-typer/zipball"
        ><img src="../assets/images/download-light.png"
      /></circle-link>
    </div>
    <div>
      <span class="badge-bar"
        ><a href="https://www.npmjs.com/package/vue-typer" target="_blank"
          ><img
            src="https://img.shields.io/npm/dt/vue-typer.svg"
            alt="Downloads" /></a
        ><a href="https://www.npmjs.com/package/vue-typer" target="_blank"
          ><img
            src="https://img.shields.io/npm/v/vue-typer.svg"
            alt="Version" /></a
        ><a href="https://www.npmjs.com/package/vue-typer" target="_blank"
          ><img
            src="https://img.shields.io/npm/l/vue-typer.svg"
            alt="License" /></a
      ></span>
    </div>
  </header>
</template>

<script>
import CircleLink from "./CircleLink.vue";
export default {
  components: {
    CircleLink,
  },
};
</script>

<style scoped lang="less">
@import "../styles/colors";
@verticalSpacing: 2rem;
.badge-bar {
  a {
    margin: 0 3px;
  }
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  background: @vue-blue;
  padding: @verticalSpacing 0;

  h1 {
    margin-bottom: @verticalSpacing;
  }
  .link-bar {
    margin-bottom: @verticalSpacing / 2;
    img {
      width: 50px;
      height: 50px;
      padding: 8px;
    }
  }
}
</style>

<style lang="less">
header {
  h1 {
    .title-typer {
      font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
      font-weight: 300;

      .custom.char {
        color: white;
      }
      .custom.caret {
        background-color: white;
        &.complete {
          display: inline-block;
        }
      }
    }
  }
}
</style>
