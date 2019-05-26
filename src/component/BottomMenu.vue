<template>

    <div class="wrapper_btn_bottom">
      <div class="result">
      <p>Search result: Total: {{couner}} </p>
      </div>
      <nav>
        <ul>
          <li><i @click="stopTimeout" class="fas fa-redo"></i> Undo </li>
          <li><i @click="stopBottomTable" class="fas fa-ban"></i> Cleade </li>
        </ul>
      </nav>
      </div>


</template>


<script>

  export default {
    computed: {
      couner() {
        return this.$store.state.bottomadd.addBot.length;
      }
    },
    methods: {
      stopBottomTable() {
        this.$store.state.bottomadd.addBot = [];
      },
      stopTimeout() {
      }
    }
  }

</script>
