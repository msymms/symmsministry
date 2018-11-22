<template>
  <div class="home-container">
    <div id="intro" class="header-container fs">
      <div class="bcg"></div>
      <header class="wrapper">
        <div id="quote" class="first-quote">{{ firstQuote }}</div>
        <div class="second-quote">{{ secondQuote }}</div>
      </header>
    </div>
    <div class="main-container">
      <section id="cb01" class="content-block">
        <div class="bottom-wrapper">
          <header class="slideInUp">
            <div class="verse">I am the Way, the Truth, and the Life ...</div>
            <p class="verse-cite slideInUp slideInUp2">John 14:6</p>
          </header>
          <section>

          </section>
          <div class="item-wrapper">
            <div id="card01" class="item">
              <nuxt-link to="/videos" class="image-link">
                <img srcset="../assets/x-small/Old-Film-w_text-600x400.jpg 600w,
                            ../assets/small/Old-Film-w_text-768x512.jpg 768w,
                            ../assets/medium/Old-Film-w_text-1500x1000.jpg 1500w,
                            ../assets/large/Old-Film-w_text-2250x1500.jpg 2250w"
                     sizes="(max-width: 576px) 600w,
                             (max-width: 768px) 768w,
                            (max-width: 1200px) 1500w"
                     src="../assets/medium/Old-Film-w_text-1500x1000.jpg"
                     alt="Photo of Old Movie Film by Denise Jans on Unsplash"/>
              </nuxt-link>
            </div>
            <div id="card02" class="item">
              <nuxt-link to="/podcasts" class="image-link">
                <!-- /.image-link -->
                <img srcset="../assets/x-small/Microphone-w_text-600x400.jpg 600w,
                            ../assets/small/Microphone-w_text-768x512.jpg 768w,
                            ../assets/medium/Microphone-w_text-1500x1000.jpg 1500w,
                            ../assets/large/Microphone-w_text-2250x1500.jpg 2250w"
                     sizes="(max-width: 576px) 600w,
                             (max-width: 768px) 768w,
                            (max-width: 1200px) 1500w"
                     src="../assets/medium/Microphone-w_text-1500x1000.jpg"
                     alt="Photo of Classic Microphone by Mat Botsford on Unsplash"/>
              </nuxt-link>
            </div>
            <div id="card03" class="item">
              <nuxt-link to="/resources" class="image-link">
                <!-- /.image-link -->
                <img srcset="../assets/x-small/Man-Book-Stacks-w_text-600x400.jpg 600w,
                            ../assets/small/Man-Book-Stacks-w_text-768x512.jpg 768w,
                            ../assets/large/Man-Book-Stacks-w_text-2250x1500.jpg 2250w"
                     sizes="(max-width: 576px) 600w,
                             (max-width: 768px) 768w,
                            (max-width: 1200px) 2250w"
                     src="../assets/medium/Old-Film-w_text-1500x1000.jpg"
                     alt="Photo of Man in Library Stacks by Banter Snaps on Unsplash"/>
              </nuxt-link>
            </div>
          </div>
          <TheFooter></TheFooter>
        </div> <!-- .wrapper -->
      </section> <!-- content-block -->
    </div> <!-- main-container -->
  </div> <!-- container -->
</template>

<script>
  import TheFooter from '@/components/TheFooter/TheFooter'
  export default {
    layout: 'home',
    components: {
      TheFooter
    },
    data: () => {
      return {
        firstQuote: 'If you want to Change the World,',
        secondQuote: 'Preach the Gospel.'
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        let $ = jQuery
        /* INITIAL ANIMATION */
        /*  create a timeline for the splitText
        *   a new SplitText instance and an array of the characters in the quote
        */
        const tlSplit = new TimelineLite(),
          mySplitText = new SplitText('#quote', { type: 'chars' }),
          chars = mySplitText.chars //an array of all the divs that wrap each character

        TweenMax.set('#quote', { perspective: 400 })
        tlSplit.staggerFrom(chars, 0.5, {
          opacity: 0,
          scale: 0,
          y: -200,
          rotationX: 0,
          transformOrigin: '0% 20% -100vw',
          ease: Back.easeOut
        }, 0.03)

        /*  Create a variable holding the element to slide.
           Here it is the div holding the second part of the quote
           positioning on this element must be relative
        */
        const ptG = $('.second-quote')
        const slide = TweenMax.fromTo(ptG, 1.2,
          { left: '350vw' },
          { left: '8vw', ease: Power2.easeOut })
        const master = new TimelineMax()
        master.add(tlSplit)
          .add(slide, '+=0.5')

        /*
        The following is the script for the parallax and the fading text
        */

        // Init ScrollMagic
        const controller = new ScrollMagic.Controller()

        //build an array of the slide elements
        const slides = ['#slide01', '#slide02', '#slide03']

        // get all triggers - headers of all 3 slides
        const headers = ['#slide01 header', '#slide02 header', '#slide03 header']
        // was 'n' changed to contentBlocks
        const contentBlocks = ['#cb01']

        // create scenes for each of the headers
        headers.forEach(function(header, index) {
          {
            let num = index + 1
            new ScrollMagic.Scene({
              triggerElement: header,
              offset: -95
            }).setClassToggle('#slide0' + num, 'is-active').addTo(controller)
          }
        })
        // create scenes for each of the controlBlocks
        contentBlocks.forEach(function(el, r) {
          {
            let blockId = $(el).attr('id')
            new ScrollMagic.Scene({
              triggerElement: el,
              triggerHook: .65
            })
              .setClassToggle('#' + blockId, 'is-active').on('enter', function(controller) {
              $('nav').attr('class', 'is-light')
            })
            // .addIndicators()
              .addTo(controller)
          }
        })

        slides.forEach(function(el, r) {
          new ScrollMagic.Scene({ triggerElement: el }).on('enter', function(controller) {
            $('nav').removeAttr('class')
          }).addTo(controller)
        })

        // create scenes for each of the outer slides
        slides.forEach(function(slide, index) {
          {
            let bcg = $(slide).find('.bcg')
            new ScrollMagic.Scene({
              triggerElement: slide,
              triggerHook: 1, //begins at the bottom of the viewport
              duration: '100%'  // from what I can tell it is a percentage of the size of the trigger el
            })
              .setTween(TweenMax.from(bcg, 1, {
                y: '-40%',
                autoAlpha: .3,
                ease: Power0.easeOut
              }))
              //.addIndicators({colorEnd: '#F00'})
              .addTo(controller)
          }
        })
        const tl = new TimelineMax
        /*
        intro animation timeline
        all three tweens fire at the same
        first tween fades out the text
        second does the parallax
        third fades the image
        */

        //Fades out the intro Text Animation
        tl.to($('#intro header'), .3, { autoAlpha: 0, ease: Power2.easeInOut })
        //tween for parallax scrolling placed 0.2 seconds before the end of the above timeline
          .to($('#intro .bcg'), 1.4, { y: '40%' }, '-=0.2')
          //timeline tween for fading out the the whole div also placed to run simultaneously
          .to($('#intro'), .7, { autoAlpha: .5, ease: Power1.easeOut }, '-=1.4')
        {
          new ScrollMagic.Scene({
            triggerElement: '#quote',
            triggerHook: 0.27, // begins when element is at the top of the viewport
            duration: '100%'
          })
            .setTween(tl)
            .addTo(controller)
        }
      })
    },

  }
</script>

<style scoped>

  body {
    font-family: Roboto, Helvetica, Helvetica Neue, Arial, sans-serif;
    background-color: #212121;
  }

  .wrapper {
    width: 100%;
    margin: 0 auto;
  }

  /* Make the body 100% of the browser viewport height */
  html, body {
    height: 100%;
    margin: 0;
  }

  /* ==========================================================================
     Author's custom styles
     ========================================================================== */
  .home-container {
    width: 100%;
    overflow-x: hidden;
  }

  /* =Header */
  .header-container {
    text-align: center;
    color: #ffffff;
    z-index: 0;
  }

  .header-container .wrapper {
    z-index: 2;
    top: 36vh;
    position: relative;
  }

  .first-quote {
    position: relative;
    font-weight: 500;
    color: #6c6842;
    font-size: 1.4rem;
    left: 1em;
    width: 25em;
    height: 2em;
    text-align: left;
  }

  .second-quote {
    position: relative;
    font-weight: 500;
    color: #ffffff;
    font-size: 2rem;
    line-height: 2em;
    height: 2em;
  }

  .bcg {
    background: no-repeat center center;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .header-container .bcg {
    background-image: url(../assets/Globe-2247x1500.jpg);
    background-size: cover;
  }

  /* =Main */
  .main-container {
    height: 100vh;
    z-index: 3;
  }

  .verse {
    font-size: 1.2rem;
    width: 95%;
    padding: 0.3em 0;
    margin: 0 auto;
    font-family: 'Roboto Condensed', Helvetica, Helvetica Neue, Arial, sans-serif;
    font-weight: 700;
  }

  .verse-cite {
    font-size: 1rem;
    font-style: italic;
    text-align: right;
    width: 50%;
    padding-bottom: 0.5em;
    margin: 0 auto;
  }

  .fs {
    height: 100vh;
  }

  .slide {
    color: #ffffff;
    position: relative;
  }

  .slide .wrapper {
    padding-top: 30px;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .slide#slide01 .wrapper {
    position: absolute;
    top: 10%;
  }

  .slide#slide02 .wrapper {
    position: absolute;
    bottom: 10%;
  }

  .slide#slide03 .wrapper {
    padding-top: 100px;
  }

  /* =Content Block */
  .content-block {
    background-color: #212121;
    color: rgba(255, 255, 255, 1);
    height: 25%;
  }

  .content-block .wrapper {
    padding-top: 2rem;
    text-align: center;
    visibility: hidden;
    opacity: 0;
  }

  .content-block.is-active {
    visibility: visible;
    opacity: 1;
    z-index: 2;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .bottom-wrapper header {
    height: 9vh;
  }

  .item-wrapper {
    width: 100%;
    height: 80vh;
    padding: 0;
    background-color: #fef6e2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .item {
    width: 14em;
  }

  .item img {
    width: 100%;
    height: auto;
    box-shadow: 3px 3px 2px 1px hsla(54, 18%, 13%, 0.5);
  }

  /* =Simple animation up */
  .slideInUp {
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all 0.7s ease-out;
    transition: all 0.7s ease-out;
    -webkit-transform: translate3d(0, 50px, 0);
    transform: translate3d(0, 50px, 0);
  }

  .is-active .slideInUp {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slideInUp.slideInUp2 {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

  .slideInUp.slideInUp3 {
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }

  /* ==========================================================================
     Media Queries  See Note at top
     ========================================================================== */
  @media (min-width: 768px) {
    body {
      font-weight: 100;
    }

    h1 {
      font-size: 3em;
    }

    p {
      font-size: 20px;
    }

    /* =Header */
    .header-container {
      overflow: hidden;
      position: relative;
    }

    .header-container .wrapper {
      position: absolute;
      width: 90%;
      top: 80%;
      left: 50%;
      -webkit-transform: translate(-50%, -120%);
      -ms-transform: translate(-50%, -120%);
      transform: translate(-50%, -120%);
      margin: 0;
      padding: 0;
    }

    .header-container:before {
      font-size: 70em;
    }

    .first-quote {
      letter-spacing: -1px;
    }

    .scroll-hint {
      font-size: 20px;
    }

    .bcg {
      opacity: 1;
    }

    .slide {
      overflow: hidden;
      overflow-x: hidden;
    }

    .slide section {
      max-width: 400px;
    }

    .slide .wrapper {
      padding-top: 120px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: left;
      width: 100%;
      margin: 0;
    }

    .slide#slide01, .slide#slide02, .slide#slide03 {
      color: #212121;
    }

    .slide#slide01 .wrapper, .slide#slide02 .wrapper, .slide#slide03 .wrapper {
      top: 20%;
      text-align: center;
    }

    .slide#slide01 section, .slide#slide02 section, .slide#slide03 section {
      margin: 0 auto;
    }

    .slide#slide01 {
      color: #ffffff;
    }

    .slide#slide02 {
      color: #ffffff;
    }

    .slide#slide02 .wrapper {
      top: auto;
      bottom: 40%;
      left: 10%;
      text-align: left;
      -webkit-transform: translate(0);
      -ms-transform: translate(0);
      transform: translate(0);
      padding: 0;
    }

    .slide#slide02 section {
      margin: 0;
    }

    .slide#slide03 .wrapper {
      padding: 0;
      top: 15%;
      -webkit-transform: translate(-50%, 0);
      -ms-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
    }

    .slide#slide03 section {
      margin: 0 auto;
      max-width: 570px;
    }

    .slide#slide03 .button {
      border-color: rgba(0, 0, 0, 0.7);
      background-color: transparent;
      color: #212121;
    }

    .slide#slide03 .bcg {
      opacity: 1;
    }

    .content-block .wrapper {
      padding: 40px 0;
    }
  }

  @media (min-width: 576px) {

  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }

  /* ==========================================================================
     Helper classes
     ========================================================================== */
  .hidden {
    display: none !important;
    visibility: hidden;
  }

  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .visuallyhidden.focusable:active, .visuallyhidden.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    width: auto;
  }

  .invisible {
    visibility: hidden;
  }

</style>
