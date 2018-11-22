<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div class="footer-top">
        <nav class="footer-nav">
          <ul class="nav-links">
            <nuxt-link to="/" tag="li" class="nav-link" v-show="!home"><a>Home</a></nuxt-link>
            <nuxt-link to="/videos" tag="li" class="nav-link video"><a>Videos</a></nuxt-link>
            <nuxt-link to="/podcasts" tag="li" class="nav-link podcast"><a>Podcasts</a></nuxt-link>
            <nuxt-link to="/resources" tag="li" class="nav-link"><a>Resources</a></nuxt-link>
            <nuxt-link to="/about" tag="li" class="nav-link"><a>About</a></nuxt-link>
          </ul>
          <!-- /.nav-links -->
        </nav>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-content">&copy; 2018 - Christopher Symms Ministries</div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'TheFooter',
    data() {
      return {
        home: false,
        isPodcast: false,
        isVideo: false
      }
    },
    mounted: function() {
      this.$nextTick(() => {
        if(this.$route.path === '/') this.home = true;
      })
    }
  }
</script>

<style scoped>
  /* =Footer */
  .footer {
    z-index: 1;
    width: 100%;
    height: 10%;
  }

  .footer-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-top {
    width: 100%;
    background-color: #711d25;
    height: 50%;
  }

  .footer-nav {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .nav-link {
    margin: 0 auto;
    padding: 0.5rem 0.3rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-link.nuxt-link-exact-active.video {
    border-bottom: 3px solid #d7a18d;
  }
  .nav-link.nuxt-link-exact-active.podcast{
    border-bottom: 3px solid #d7a18d;
  }

  .nav-link a {
    display: block;
    text-decoration: none;
    color: white;
  }

  .nav-link a:hover,
  .nav-link a:active,
  .nav-link.nuxt-link-exact-active a {
    color: #d7a18d;
  }

  .footer-bottom {
    background-color: #711d25;
    opacity: 0.9;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-bottom-content {
    opacity: 1;
    color: white;
    margin: 0.5em;
  }
</style>
