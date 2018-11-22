<template>
  <section id="posts">
    <PostPreview
        v-for="post in loadedVideos"
        :key="post.uuid"
        :title="post.content.title"
        :thumbnailImage="post.content.image"
        :excerpt="post.content.excerpt"
        :id="`videos/${post.slug}`"/>
  </section>
  <!-- /.container -->
</template>

<script>
  import PostPreview from '@/components/Blog/PostPreview'
  export default {
    components: {
      PostPreview
    },
    asyncData(context) {
      /*load latest Videos into loadedVideos array to be consumed by
         *the index page and placed in store
        */
        return context.app.$storyapi.get('cdn/stories', {
        version: 'draft',
        starts_with: 'videos/'
      }).then(res => {
        const postsArray = []
        for (const key in res.data.stories) {
          postsArray.push({ ...res.data.stories[key], id: key })
        }
        context.store.commit('setVideos', postsArray);
      }).catch(context.error());
    },
    computed: {
      loadedVideos() {
        return this.$store.getters.loadedVideos
      }
    },
    mounted: () => {
      let $ = jQuery
      $(window).scrollTop(0);
    }
  }
</script>

<style scoped>
  #posts {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 840px) {
    #posts {
      flex-direction: row;
    }
  }
</style>
