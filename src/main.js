import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'Shawn Leberknight',
    location: 'Charleston, SC',
  },
})

export default app
