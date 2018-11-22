<template>
  <div class="media-frame-container">
    <iframe :src=src></iframe>
  </div><!-- /.media-frame-container -->
</template>

<script>
  export default {
    name: 'MediaFrame',
    props: {
      src: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .media-frame-container iframe {
    background-color: #000;
    width: 100%;
  }
</style>
