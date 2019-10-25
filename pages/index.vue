<template>
  <div>
    <v-card>
      <div>
        <h3>ENROL</h3><br/>
        <input type="text"><input type="button" value="enrol">
      </div>
    </v-card>
    <v-card>
      <div>
        <h3>List</h3><br/>
      <div>
        <!-- <li v-for="(todo, i) in todos" :key="todo.title"></li> -->
      </div>
    </div>
    </v-card>>
</div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
.container {
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

