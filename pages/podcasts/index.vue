<template>
  <section id="podcasts">
    <PostPreview
        v-for="post in loadedPodcasts"
        :key="post.uuid"
        :title="post.content.title"
        :thumbnailImage="post.content.image"
        :excerpt="post.content.excerpt"
        :id="`podcasts/${post.slug}`"/>
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
        /*load latest Pod casts into loadedPodcasts array to be consumed by
           *the index page and placed in store
          */
        return context.app.$storyapi.get('cdn/stories', {
          version: 'draft', // Currently grabbing the draft versions
          starts_with: 'podcasts/', //Getting entries whose full-slug starts with 'podcasts/'
          per_page: 5 //only getting the last 5 entries
        }).then(res => {
          //we get a promise object returned.  Must map to an array
          const postsArray = []
          for (const key in res.data.stories) {
            postsArray.push({ ...res.data.stories[key], id: key })
          }
          //store the array in the vuex store
          context.store.commit('setPodcasts', postsArray);
        }).catch(context.error())
    },
    computed: {
      loadedPodcasts() {
        return this.$store.getters.loadedPodcasts
      }
    },
    mounted: () => {
      let $ = jQuery
      $(window).scrollTop(0);
    }
  }
</script>

<style scoped>
  #podcasts {
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 840px) {
    #podcasts {
      flex-direction: row;
    }
  }
</style>
