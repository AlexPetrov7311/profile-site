<template>
    <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>fingerprint</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Skils</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile >
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Work</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>  
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Profile Site</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <router-view/>
      </v-content>
    </main>
    <v-footer app fixed>
      <span>Alex &copy; 2017 </span>
    </v-footer>
  </v-app>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
  
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
