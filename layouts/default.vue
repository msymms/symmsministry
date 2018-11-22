<template>
  <div class="container">
    <TheHeader></TheHeader>
    <main class="main-content">
      <nuxt/>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader/TheHeader'
  import TheFooter from '@/components/TheFooter/TheFooter'

  export default {
    components: {
      TheHeader,
      TheFooter
    }
  }
</script>

<style scoped>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: "Lato", sans-serif;
  }
  .container {
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  .main-content {
    margin-top: 10vh;
    min-height: 80%;
  }
</style>
