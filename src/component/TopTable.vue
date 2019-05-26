<template>
<tbody>
  <tr v-for="ad in add"  :key="ad.id">
    <td data-label="Call control"><p>{{ad.call_control}}</p></td>
    <td data-label="Read"><p>{{ad.read}}</p></td>
    <td data-label="Sound"><p>{{ad.sound}}</p></td>
    <td data-label="Truck"><p>{{ad.truck}}</p></td>
    <td data-label="Origin"><p>{{ad.origin}}</p></td>
    <td data-label="Destionation"><p>{{ad.destionation}}</p></td>
    <td data-label="Pickua"><p>{{ad.pickup}}</p></td>
    <td data-label="DH-O"><p>{{ad.dho}}</p></td>
    <td data-label="DH-D"><p>{{ad.dhd}}</p></td>
    <td data-label="F/P"><p>{{ad.fp}}</p></td>
    <td data-label="Length"><p>{{ad.length}}</p></td>
    <td data-label="Weight"><p>{{ad.weight}}</p></td>
    <td data-label="Trip"><p>{{ad.trip}}</p></td>
    <td data-label="Alarm"><p>{{ad.alarm}}</p></td>
    <td data-label="Action"><p>{{ad.actions}}</p></td>
  </tr>
</tbody>
</template>

<script>

  export default {
   computed: {
     add () {
       return this.$store.getters.add
     }
   }
  }

</script>
