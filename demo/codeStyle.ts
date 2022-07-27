export const codeDemoStyle = `.vue-typer {
  font-family: monospace;
}

.vue-typer .custom.char {
  color: #d4d4bd;
  background-color: #1e1e1e;
}
.vue-typer .custom.char.selected {
  background-color: #264f78;
}

.vue-typer .custom.caret {
  width: 10px;
  background-color: #3f51b5;
}
`;
export const ghostCodeStyle = `.vue-typer {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
}

.vue-typer .custom.char.typed {
  color: #607d8b;
}
.vue-typer .custom.char.selected {
  color: #607d8b;
  background-color: transparent;
  text-decoration: line-through;
}

.vue-typer .custom.caret {
  display: none;
}
`;
export const stateStyle = `@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }
  ,
  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: #009688;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #009688;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
`;
