
<template>
  <div class="div">
  <top-menu>

  </top-menu>
    <div class="top_header-teble">
      <table>

        <tr>
          <th>Call control</th>
          <th>Read</th>
          <th>Sound/Auto Call</th>
          <th>Truck</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Pickup</th>
          <th>DH-O</th>
          <th>DH-D</th>
          <th>F/P</th>
          <th>Lenght</th>
          <th>Weight</th>
          <th>Trip</th>
          <th>Alarm</th>
          <th>Actions</th>
        </tr>

        <top-table></top-table>

      </table>
    </div>
    <bottom-menu>

    </bottom-menu>

    <div class="top_header-teble">
      <table>

        <tr>
          <th>Rate</th>
          <th>F</th>
          <th>Source</th>
          <th>Age</th>
          <th>Avail</th>
          <th>Truck</th>
          <th>Truck-O</th>
          <th>DH-O</th>
          <th>F/P</th>
          <th>Origin</th>
          <th>Trip</th>
          <th>Destination</th>
          <th>DH-D</th>
          <th>Truck-D</th>
          <th>Length</th>
          <th>Weight</th>
          <th>Company</th>
          <th>Phone</th>
        </tr>
        <bottom-table>

        </bottom-table>

      </table>
    </div>



  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

