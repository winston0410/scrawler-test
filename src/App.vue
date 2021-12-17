<template>
  <main>
    <up-vote-container
      v-for="container in containerList"
      v-bind:key="container.id"
      :container="container"
      class="upvote-container"
    />
    <button type="button" v-on:click="addNewContainer">Add new container</button>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UpVoteContainer from "./components/UpVoteContainer.vue";

@Options({
  components: {
    UpVoteContainer,
  },
  computed: {
    containerList() {
      return this.$store.state.containerList;
    },
  },
  methods: {
    addNewContainer(){
        this.$store.dispatch('addContainer')
    }
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  margin: 0;
  padding: 0;
}

main{
    padding: 0.5rem;
}


html {
  font-size: 16px;
}

@media (min-width: 768px) {
  html {
    font-size: 18px;
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 20px;
  }
}

.upvote-container{
    margin-bottom: 1rem;
}
</style>
