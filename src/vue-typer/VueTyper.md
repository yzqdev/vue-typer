# 教程

```vue
<template>
  <VueTyper text='Hello World! I was registered globally!'></VueTyper>
</template>

<script>

 
export default {
  }
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

```
