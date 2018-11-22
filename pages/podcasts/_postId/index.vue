<template>
  <div id="post">
    <div class="post-thumbnail" :style="{backgroundImage: 'url(' + loadedPost.image + ')'}"></div>
    <MediaFrame :src="loadedPost.podcast"></MediaFrame>
    <section class="post-content">
      <h1>{{ loadedPost.title }}</h1>
      <p class="author">by {{ getAuthorName(loadedPost.author) }}</p>
      <p class="published-date">Published on {{ loadedPost.publishedDate | date }}</p>
      <hr>
      <!-- /.published-date -->
      <!-- /.author -->
      <p>{{ loadedPost.content }}</p>
    </section>
    <section class="post-comment">
      <hr>
      <div id="disqus_thread"></div>
    </section>
    <!-- /.post-comment -->
  </div>
  <!-- /#post -->
</template>

<script>
  import MediaFrame from '@/components/Shared/MediaFrame'

  export default {
    components: {
      MediaFrame
    },
    asyncData(context) {
      return context.app.$storyapi.get('cdn/stories/podcasts/' + context.params.postId, {
        version: 'draft'
      }).then(res => {
        return {
          loadedPost: {
            image: res.data.story.content.image,
            title: res.data.story.content.title,
            content: res.data.story.content.content,
            podcast: res.data.story.content.podcast,
            author: res.data.story.content.author,
            // publishedDate: res.data.story.content.published
            publishedDate: 'Wed Nov 21 2018 06:57:25 GMT-0600'
          }
        }
      }).catch(e => context.error(e))
    },
    methods: {
      getAuthorName(uuid) {
        const authors = this.$store.getters.loadedAuthors
        //TODO: add code to handle multiple authors on one article.
        for (const i in authors) {
          if (authors[i].uuid === uuid) {
            return authors[i].content.name
          }
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        /**
         *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT
         *  THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR
         *  PLATFORM OR CMS.
         *
         *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT:
         *  https://disqus.com/admin/universalcode/#configuration-variables
         */

        const disqus_config = () => {
          // Replace PAGE_URL with your page's canonical URL variable
          // this.page.url = PAGE_URL
          this.page.url = this.$router.route

          // Replace PAGE_IDENTIFIER with your page's unique identifier variable
          this.page.identifier = this.$router.route
        }
      })
    },
    head() {
      return {
        script: [
          // will have to exchange 'staging-csm' with the production forum shortname
          { src: 'https://staging-csm.disqus.com/embed.js', 'data-timestamp': new Date() }
        ]
      }
    }
  }
</script>

<style scoped>
  .media-frame-container {
    width: 100%;
    height: 10em;
  }

  .post-thumbnail {
    width: 100%;
    height: 12rem;
    background-size: cover;
    background-position: top;
    display: none;
  }

  h1 {
    margin: 0;
  }

  .published-date,
  .author {
    font-style: italic;
    margin: 0;
  }


  .post-content {
    width: 80%;
    height: 100%;
    max-width: 500px;
    margin: auto;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  .post-content p {
    white-space: pre-line;
  }

  .post-comment {
    width: 80%;
    margin: auto;
  }
</style>
