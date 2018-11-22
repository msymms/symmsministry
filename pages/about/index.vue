<template>
    <section id="about-page">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
    </section>
    <!-- /#about-page -->
</template>

<script>
  export default {
    name: 'index',
    asyncData(context) {
      return context.app.$storyapi.get('cdn/stories/about', {
        version: 'draft'
      }).then(res => {
        return {
          title: res.data.story.content.title,
          content: res.data.story.content.content
        }
      })
    },
    mounted: () => {
      let $ = jQuery
      $(window).scrollTop(0);
    }
  }
</script>

<style scoped>
  #about-page {
    width: 80%;
    height: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding-top: 1em;
  }
  #about-page h1 {
    margin: 0;
  }
  #about-page p {
    white-space: pre-line;
  }
</style>
