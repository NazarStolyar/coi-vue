<template>
  <tbody>
  <tr v-for="ads in addBot"  :key="ads.id">
    <td data-label="Rate">{{ads.rate}}</td>
    <td data-label="F">{{ads.f}}</td>
    <td data-label="Sourse">{{ads.sourse}}</td>
    <td data-label="Age">{{ads.age}}</td>
    <td data-label="Avial">{{ads.avail}}</td>
    <td data-label="Truck">{{ads.truck}}</td>
    <td data-label="Truck-O">{{ads.truckO}}</td>
    <td data-label="DH-O">{{ads.dho}}</td>
    <td data-label="F/P">{{ads.fp}}</td>
    <td data-label="Origin">{{ads.origin}}</td>
    <td data-label="Trip">{{ads.trip}}</td>
    <td data-label="Destionation">{{ads.destionation}}</td>
    <td data-label="DH-D">{{ads.dhd}}</td>
    <td data-label="Truck-D">{{ads.truckd}}</td>
    <td data-label="Length">{{ads.length}}</td>
    <td data-label="Weight">{{ads.weight}}</td>
    <td data-label="Company">{{ads.company}}</td>
    <td data-label="Phone">{{ads.phone}}</td>
  </tr>
  </tbody>
</template>


<script>

  export default {
    computed: {
      addBot () {
        return this.$store.getters.addBot
      }
    }
  }

</script>
