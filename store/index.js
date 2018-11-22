import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedVideos: [],
      loadedPodcasts: [],
      loadedAuthors: []
    },
    mutations: {
      setVideos(state, posts) {
        state.loadedVideos = posts
      },
      setPodcasts(state, posts) {
        state.loadedPodcasts = posts
      },
      setAuthors(state, authors) {
        state.loadedAuthors = authors
      }
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
        const authors = []
        let [authorsRes] = await Promise.all([
          context.app.$storyapi.get('cdn/stories/', {
          version: 'draft',
          starts_with: 'authors'
          }).then(res => {
          for (const key in res.data.stories) {
            authors.push({ ...res.data.stories[key], id: key })
          }
          vuexContext.commit('setAuthors', authors)
          }).catch(e => {
            console.log(context.error(e))
          }),

        ])
        return {
          authorsRes
        }
      },
      setVideos(vuexContext, posts) {
        vuexContext.commit('setVideos', posts)
      },
      setPodcasts(vuexContext, posts) {
        vuexContext.commit('setPodcasts', posts)
      },
      setAuthors(vuexContext, authors) {
        vuexContext.commit('setAuthors', authors)
      }
    },
    getters: {
      loadedVideos(state) {
        return state.loadedVideos
      },
      loadedPodcasts(state) {
        return state.loadedPodcasts
      },
      loadedAuthors(state) {
        return state.loadedAuthors
      }
    }
  })
}

export default createStore
