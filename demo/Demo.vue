<template>
  <app-layout class="demo"
    ><template #header>
      <hero-header></hero-header>
    </template>
    <template #main-playground-output>
      <h3 class="demo-typer-container">
        <vue-typer
          class="demo-typer"
          :text="text"
          :repeat="repeat"
          :shuffle="shuffle"
          :initial-action="initialAction"
          :pre-type-delay="preTypeDelay"
          :type-delay="typeDelay"
          :pre-erase-delay="preEraseDelay"
          :erase-delay="eraseDelay"
          :erase-style="eraseStyle"
          :erase-on-complete="eraseOnComplete"
          :caret-animation="caretAnimation"
        ></vue-typer></h3></template
    ><template #main-playground-text
      ><div class="form-group">
        <label>你想打出的字:</label
        ><el-input
          type="textarea"
          class="form-control"
          id="text"
          v-model="textModel"
          rows="4"
          placeholder="text"
        ></el-input></div></template
    ><template #main-playground-config
      ><el-row>
        <el-col :span="6" id="general-config">
          <label for="repeat">repeat</label>
          <el-input v-model="repeatModel" id="repeat" /><el-checkbox
            v-model="shuffle"
            >乱序 </el-checkbox
          ><el-checkbox class="shrink-text" v-model="eraseOnComplete"
            >eraseOnComplete
          </el-checkbox>
          <label>initialAction</label>
          <el-radio-group v-model="initialAction">
            <el-radio :label="item" v-for="item in ['typing', 'erasing']">{{
              item
            }}</el-radio></el-radio-group
          >
        </el-col>
        <el-col :span="6" id="delay-config">
          <label>preTypeDelay</label>
          <el-input-number v-model="preTypeDelay" type="number" />
          <label>typeDelay</label><el-input-number v-model="typeDelay" />
          <label>preEraseDelay</label>
          <el-input-number v-model="preEraseDelay" type="number" /><label
            >eraseDelay</label
          ><el-input-number v-model="eraseDelay" type="number" number />
        </el-col>
        <el-col :span="6" id="erase-style-config">
          <label>eraseStyle</label>
          <el-radio-group v-model="eraseStyle">
            <el-radio
              v-for="item in [
                'backspace',
                'select-back',
                'select-all',
                'clear',
              ]"
              :label="item"
            >
            </el-radio
          ></el-radio-group>
        </el-col>
        <el-col :span="6" id="caret-config">
          <label>caretAnimation</label>
          <el-radio-group v-model="caretAnimation">
            <el-radio
              :label="item"
              v-for="item in ['solid', 'blink', 'smooth', 'phase', 'expand']"
            >
            </el-radio
          ></el-radio-group> </el-col></el-row></template
    ><template #main-playground-code
      ><code-block :code="playgroundDemoCode"></code-block></template
    ><template #style-showcase-panel-1
      ><h4>
        <vue-typer
          class="state-typer"
          text="Katniss Everdeen"
          :pre-type-delay="1000"
          :type-delay="160"
          :pre-erase-delay="2000"
          :erase-delay="80"
          erase-style="select-back"
          caret-animation="solid"
        ></vue-typer>
      </h4>
      <code-block
        :code="stateDemoStyleCode"
        language="css"
      ></code-block></template
    ><template #style-showcase-panel-2
      ><h4>
        <vue-typer
          class="code-typer"
          text="Katniss Everdeen"
          :pre-type-delay="1000"
          :type-delay="160"
          :pre-erase-delay="2000"
          :erase-delay="1280"
          erase-style="select-all"
          caret-animation="blink"
        ></vue-typer>
      </h4>
      <code-block
        :code="codeDemoStyleCode"
        language="css"
      ></code-block></template
    ><template #style-showcase-panel-3
      ><h4 class="card-title">
        <vue-typer
          class="ghost-typer"
          text="Katniss Everdeen"
          :pre-type-delay="1000"
          :type-delay="160"
          :pre-erase-delay="2000"
          :erase-delay="80"
          erase-style="select-back"
        ></vue-typer>
      </h4>
      <code-block
        :code="ghostDemoStyleCode"
        language="css"
      ></code-block></template
    ><copyright-footer #footer></copyright-footer
  ></app-layout>
</template>

<script>
import AppLayout from "./components/AppLayout.vue";
import HeroHeader from "./components/HeroHeader.vue";
import CopyrightFooter from "./components/CopyrightFooter.vue";
import CodeBlock from "./components/CodeBlock.vue";
import { codeDemoStyle, ghostCodeStyle, stateStyle } from "./codeStyle";

export default {
  components: {
    AppLayout,
    HeroHeader,
    CopyrightFooter,
    CodeBlock,
  },
  data() {
    return {
      textModel: ["我的妈呀", "这是什么", "不不不", "一直很安静"].join("\n"),
      repeatModel: Infinity,
      shuffle: false,
      initialAction: "typing",
      typeDelay: 70,
      preTypeDelay: 70,
      eraseDelay: 250,
      preEraseDelay: 2000,
      eraseStyle: "select-all",
      eraseOnComplete: false,
      caretAnimation: "blink",
    };
  },
  computed: {
    text() {
      return this.textModel.split("\n");
    },
    repeat() {
      const repeatValue = parseInt(this.repeatModel);
      return Number.isNaN(repeatValue) ? Infinity : repeatValue;
    },
    playgroundDemoCode() {
      const printableTextArray =
        "[" + this.text.map((word) => `"${word}"`) + "]";
      return `
       <p> <vue-typer
          :text='${printableTextArray}'
          :repeat='${this.repeat}'
          :shuffle='${this.shuffle}'
          initial-action='${this.initialAction}'
          :pre-type-delay='${this.preTypeDelay}'
          :type-delay='${this.typeDelay}'
          :pre-erase-delay='${this.preEraseDelay}'
          :erase-delay='${this.eraseDelay}'
          erase-style='${this.eraseStyle}'
          :erase-on-complete='${this.eraseOnComplete}'
          caret-animation='${this.caretAnimation}'
        ></vue-typer></p>
      `;
    },
    stateDemoStyleCode() {
      return stateStyle;
    },
    codeDemoStyleCode() {
      return codeDemoStyle;
    },
    ghostDemoStyleCode() {
      return ghostCodeStyle;
    },
  },
};
</script>

<style scoped lang="less">
.demo {
  #output-panel {
    .demo-typer-container {
      height: 100%;
    }
  }

  #text-panel {
    .form-group {
      margin-bottom: initial;

      textarea {
        width: 100%;
      }
    }
  }

  .shrink-text {
    font-size: 0.9rem;
  }
}
</style>

<style lang="less">
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(10deg);
  }
}

main {
  .state-typer {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;

    .custom.char {
      &.typed {
        color: #009688;
      }
      &.selected {
        color: #e91e63;
      }
    }
    .custom.caret {
      animation: rocking 1s ease-in-out 0s infinite;

      &.typing {
        background-color: #009688;
      }
      &.selecting {
        display: inline-block;
        background-color: #e91e63;
      }
    }
  }

  .code-typer {
    font-family: monospace;

    .custom.char {
      color: #d4d4bd;
      background-color: #1e1e1e;

      &.selected {
        background-color: #264f78;
      }
    }
    .custom.caret {
      width: 10px;
      background-color: #3f51b5;
    }
  }

  .ghost-typer {
    font-family: Copperplate, "Copperplate Gothic Light", fantasy;

    .custom.char {
      &.typed {
        color: #607d8b;
      }
      &.selected {
        color: #607d8b;
        background-color: transparent;
        text-decoration: line-through;
      }
    }
    .custom.caret {
      display: none;
    }
  }
}
</style>
