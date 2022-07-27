<template>
  <footer>
    <small
      >Released under the
      <a href="https://opensource.org/licenses/MIT" target="_blank"
        >MIT License</a
      ><br />Copyright &copy; 2016-2020 Chris Nguyen</small
    >
  </footer>
</template>

<style scoped lang="less">
@import "../styles/colors";

footer {
  padding: 2rem;
  color: white;
  background: @vue-green;
  text-align: center;

  a {
    color: white;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>
