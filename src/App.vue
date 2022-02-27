<template>
  <div id="app">
	  
    <div id="nav">
		<NavTop />
		
	  
    </div>
	
    <router-view />
	
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 5px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
// @ is an alias to /src
import NavTop from "@/components/NavTop.vue";


export default {
  name: "App",
  components: {
    NavTop,
  },
};
</script>
