var app = new Vue({
  el: '#app',
  data: {
    days: []
  },
  computed: {

  },
  created: function() {
    this.createTable();
  },
  methods: {
    toggleSelected(time) {
      time.isSelected = !time.isSelected;
    },
    toggleDay() {
      for (time in this.days[0].times) {
        this.toggleSelected(time);
      }
    },
    createTable() {
      for (let i = 0; i < 7; ++i) {
        let newTimes = [];
        for (let j = 6; j < 22; j++) {
          newTimes.push({
            hour: j,
            isSelected: false
          });
        }
        this.days.push({
          times: newTimes
        })

      }
    },
  }
})