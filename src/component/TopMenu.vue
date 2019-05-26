<template>
  <div>
    <h1> {{ topText }} </h1>
    <div class="wrapper_btn">
      <nav>
        <ul>
          <li><i @click="addNewTableBot"
                 class="fas fa-play-circle"></i> </li>
          <li><i @click="isVisibilitiModalForm = true"
                 class="fas fa-plus"></i> New </li>
          <li><i @click="deleteAdd"
            class="fas fa-times"></i> Delete All </li>
          <li><i class="fas fa-redo"></i> Report All </li>
        </ul>
      </nav>
    </div>
    <div class="modal fade show" v-if="isVisibilitiModalForm" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Form</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              @click = 'isVisibilitiModalForm = false'
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form  ref="form_top_send" action="">
              <div class="row">
                <div class="col-md-6">
                  <input
                    type="text"
                    v-model="call_control"
                    name="call_control"
                    placeholder="Call Control"
                  >
                  <input
                    type="text"
                    v-model="read"
                    name="read"
                    placeholder="Read"
                  >
                  <input
                    type="text"
                    v-model="sound"
                    name="sound"
                    placeholder="Sound/Auto Call">
                  <input
                    type="text"
                    v-model="truck"
                    name="truck"
                    placeholder="Truck">
                  <input
                    type="text"
                    v-model="origin"
                    name="origin"
                    placeholder="Origin">
                  <input
                    type="text"
                    v-model="destionation"
                    name="destionation"
                    placeholder="Destination">
                  <input
                    type="text"
                    v-model="pickup"
                    name="pickup"
                    placeholder="PickUp">
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    v-model="dho"
                    name="dho"
                    placeholder="DH-O">
                  <input
                    type="text"
                    v-model="dhd"
                    name="dhd"
                    placeholder="DH-D">
                  <input
                    type="text"
                    v-model="fp"
                    name="fp"
                    placeholder="F/P">
                  <input
                    type="text"
                    v-model="length"
                    name="length"
                    placeholder="Length">
                  <input
                    type="text"
                    v-model="weight"
                    name="weight"
                    placeholder="Weight">
                  <input
                    type="text"
                    v-model="trip"
                    name="trip"
                    placeholder="Trip">
                  <input
                    type="text"
                    v-model="alarm"
                    name="alarm"
                    placeholder="Alarm">
                  <input
                    type="text"
                    v-model="actions"
                    name="actions"
                    placeholder="Actions">
                </div>
              </div>
              <input type="submit" value="Send" @click="addNewTable">

            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click = 'isVisibilitiModalForm = false'
              data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" v-if="isVisibilitiModalForm"></div>
  </div>
</template>


<script>

  export default {
    data() {
      return {
        topText: 'Post Truks',
        isVisibilitiModalForm: false,
        call_control: '',
        read: '',
        sound: '',
        truck: '',
        origin: '',
        destionation: '',
        pickup:'',
        dho: '',
        dhd: '',
        fp: '',
        length: '',
        weight: '',
        trip: '',
        alarm: '',
        actions: ''
      }
    },
    methods: {
      addNewTable(e) {
        e.preventDefault();
        const add = {
          call_control: this.call_control,
          read: this.read,
          sound: this.sound,
          truck: this.truck,
          origin: this.origin,
          destionation: this.destionation,
          pickup: this.pickup,
          dho: this.dho,
          dhd: this.dhd,
          fp: this.fp,
          length: this.length,
          weight: this.weight,
          trip: this.trip,
          alarm: this.alarm,
          actions: this.actions
        };
        this.$store.dispatch('addNewTable', add);
        this.isVisibilitiModalForm = false;
        this.call_control = '';
        this.read = '';
        this.sound = '';
        this.truck = '';
        this.origin = '';
        this.destionation = '';
        this.pickup = '';
        this.dho = '';
        this.dhd = '';
        this.fp = '';
        this.length = '';
        this.weight = '';
        this.trip = '';
        this.alarm = '';
        this.actions =''
      },
      deleteAdd () {
        this.$store.state.addtop.add = [];
      },
      addNewTableBot() {
            const obj = {
              rate: 3150,
              f: 'Yes',
              sourse: 'date',
              age: '00:01',
              avail: '11/24',
              truck: 'V',
              truckO: 'Bellwood',
              dho: 371,
              fp: 'f',
              origin: 'Erie',
              trip: '422',
              destionation: 'Sealy Tx',
              dhd: '',
              truckd: '',
              length: '53fp',
              weight: '43 kilbs',
              company: 'Coyote Logistics',
              phone: '073 799 2118'
            };
        this.$store.dispatch('addNewTableBot', obj);

      }
    }
  }

</script>
