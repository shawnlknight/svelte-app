import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'Shawn',
    location: 'Charleston, SC',
    occupation: 'Keyboard puncher',
  },
})

export default app
