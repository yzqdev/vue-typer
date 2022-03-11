<template>
  <div class="app-layout">
    <slot name="header"></slot>
    <main class="container">
      <section id="playground">
        <h4>VueTyper Playground</h4>
        <div id="output-panel">
          <slot name="main-playground-output"></slot>
        </div>
        <div id="text-panel">
          <slot name="main-playground-text"></slot>
        </div>
        <div id="config-panel">
          <slot name="main-playground-config"></slot>
        </div>
        <div id="code-panel">
          <slot name="main-playground-code"></slot>
        </div>
      </section>
      <section id="style-showcase">
        <h4>VueTyper is also stylable with CSS!</h4>
        <div>
          <el-row>
            <el-col :span="8">
              <slot name="style-showcase-panel-1"></slot>
            </el-col>
            <el-col :span="8">
              <slot name="style-showcase-panel-2"></slot>
            </el-col>
            <el-col :span="8">
              <slot name="style-showcase-panel-3"></slot>
            </el-col>
          </el-row>
        </div>
      </section>
    </main>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped lang="less">
@import "../styles/colors";

@section-vertical-spacer: 4rem;

.app-layout {
  .container {
    margin: 0 300px;
  }
  main {
    margin-bottom: @section-vertical-spacer * 2;

    #playground {
      margin-bottom: @section-vertical-spacer;
    }

    h4 {
      height: 1.1em;
      margin-bottom: 1em;
      color: @vue-blue;
    }
    .card {
      padding: 1em;
      margin-bottom: initial;
    }
  }
}
</style>
