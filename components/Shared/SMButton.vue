<template>
  <button class="btn"></button>
  <!-- /.btn -->
</template>

<script>
  export default {
    name: 'SMButton'
  }
</script>

<style scoped>
  .btn {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    margin: 0.5em;
    border: none;
    border-radius: .5em;
    padding: 0 1em;
    min-width: 4rem;
    height: 4em;
    vertical-align: middle;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: #fff;
    background-color: #5a4b41;
    /*box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);*/
    font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system;
    font-size: 0.5rem;
    font-weight: 500;
    line-height: 2em;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.2s;
  }
  .btn:hover,
  .btn:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  .btn:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(90, 75, 65, 0.25);
  }
  .btn:disabled {
    color: rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: none;
    cursor: initial;
  }
  .btn::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .btn:hover::before {
    opacity: 0.12;
  }
  .btn:focus::before {
    opacity: 0.2;
  }
  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(25, 54, 36, 0.3);
  }
  .btn:active::before {
    opacity: 0.32;
  }
  .btn:disabled::before {
    opacity: 0;
  }
  .btn::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 18px;
    border-radius: 50%;
    padding: 50%;
    width: 32px;
    height: 32px;
    background-color: currentColor;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }
  .btn:active::after {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }
  .btn:disabled::after {
    opacity: 0;
  }
</style>
