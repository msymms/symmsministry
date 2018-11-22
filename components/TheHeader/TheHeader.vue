<template>
  <header class="main-header">
    <img src="../../assets/Cross-on-Mountain-150x150.jpg" alt="" class="header-image"><!-- /.header-image -->
    <div class="header-content">
      <div class="site-title">{{ siteTitle }}</div> <!-- /.sitetitle -->
      <div class="header-icons">
        <FacebookIcon></FacebookIcon>
        <Twitter></Twitter>
        <Instagram></Instagram>
      </div>
      <!-- /.header-icons -->
    </div>
    <!-- /.header-content -->
    <!--<nav class="main-nav">-->
    <!--<ul class="nav-links">-->
    <!--<nuxt-link to="/" tag="li" class="nav-link"><a>Home</a></nuxt-link>-->
    <!--<nuxt-link to="/posts" tag="li" class="nav-link"><a>All Posts</a>></nuxt-link>-->
    <!--<nuxt-link to="/resources" tag="li" class="nav-link"><a>Resources</a></nuxt-link>-->
    <!--<nuxt-link to="/about" tag="li" class="nav-link"><a>About Me</a></nuxt-link>-->
    <!--</ul>-->
    <!--&lt;!&ndash; /.nav-links &ndash;&gt;-->
    <!--</nav>-->
    <!-- /.main-nav -->
  </header>
  <!-- /.main-header -->
</template>

<script>
  import FacebookIcon from '@/components/Icons/Facebook.vue'
  import Instagram from '@/components/Icons/Instagram.vue'
  import Twitter from '@/components/Icons/Twitter.vue'

  export default {
    name: 'TheHeader',
    components: {
      FacebookIcon,
      Twitter,
      Instagram
    },
    data() {
      return {
        src: 'assets/Cross-on-Mountain-150x150.jpg',
        siteTitle: 'Christopher Symms Ministries'
      }
    }
  }
</script>

<style scoped>
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #022d30;
    height: 10%;
    display: flex;
  }

  .header-image {
    height: 90%;
    min-width: 60px;
    margin: 0.2rem 0 0 0.2rem;

  }

  .header-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .site-title {
    color: #fff;
    height: 50%;
    font-size: 1.3rem;
    width: 100%;
    text-align: center;
  }

  .header-icons {
    height: 50%;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    padding-right: 1em;
  }

  .main-nav {
    height: 100%;
    display: none;
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
    margin: 0 1rem;
    padding: 0.3rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-link.nuxt-link-exact-active {
    border-bottom: 3px solid #06c4d1;
  }

  .nav-link a {
    display: block;
    text-decoration: none;
    color: white;
  }

  .nav-link a:hover,
  .nav-link a:active,
  .nav-link.nuxt-link-exact-active a {
    color: #06c4d1;
  }

  .material-design-icon {
    display: inline-flex;
    align-self: center;
    position: relative;
    padding-left: 0.1em;
    height: 1.5rem;
    width: 1.5rem;
    fill: white;
  }
  .material-design-icon > .material-design-icon__svg {
    fill: #ffffff;
    /*position: absolute;*/
    /*bottom: -0.125em;*/
  }

</style>
