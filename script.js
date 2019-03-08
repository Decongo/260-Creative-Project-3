var app = new Vue({
    el: '#app',
    data: {
        days: []
    },
    computed: {

    },
    created: function () {
        this.createTable();
    },
    methods: {
        toggleSelected(time) {
            time.isSelected = !time.isSelected
        },
        createTable() {
            for (let i = 0; i < 7; ++i) {
                let newTimes = [];
                for (let j = 6; j < 21; j++) {
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

document.addEventListener("dragenter", function (event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "time-card") {
        app.toggleSelected();
    }

}, false);

document.addEventListener("dragleave", function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "time-card") {
        event.target.style.background = "";
    }

}, false);