<template>
  <nuxt-link
      :to="id">
    <article class="post-preview">
      <div
          :style="{backgroundImage: `url(${thumbnailImage})`}"
          class="post-preview-thumbnail"></div>
      <div class="post-preview-content">
        <h1>{{ title }}</h1>
        <p>{{ excerpt }}</p>
      </div>
      <!-- /.post-preview-content -->
      <!-- /.post-preview-thumbnail -->
    </article>
  </nuxt-link>
  <!-- /.post-preview -->
</template>

<script>
  export default {
    name: 'PostPreview',
    props: {
      title: {
        type: String,
        required: true
      },
      excerpt: {
        type: String,
        required: true
      },
      thumbnailImage: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      },

    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #000;
  }
  .post-preview {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
    width: 90%;
    margin: 1rem;
    height: 20rem;
  }
  .post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
  }
  .post-preview-content {
    text-align: center;
    padding: 1rem;
  }

  @media (min-width: 35rem) {
    .post-preview {
      width: 25rem;
    }
  }
</style>
