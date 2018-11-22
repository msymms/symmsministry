<template>
    <div class="error-page">
        <h1>Oops, something went wrong!</h1>
        <p>Back to <a href="/">safety</a>!</p>
    </div>
</template>

<style scoped>
    h1 {
      margin: 0;
    }
    .error-page {
      text-align: center;
      width: 80%;
      height: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding-top: 1em;
    }

    .error-page a {
        text-decoration: none;
        color: red;
    }

    .error-page a:hover,
    .error-page a:active {
        color: salmon;
    }
</style>
