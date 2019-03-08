var app = new Vue({
    el: '#app',
    data: {
        isSelected: false,
        times: []
    },
    computed: {

    },
    created: function () {
        this.createTable();
    },
    methods: {
        toggleSelected() {
            this.isSelected = !this.isSelected
        },
        createTable() {
            for (let i = 6; i < 21; i++) {
                this.times.push({
                    hour: i
                });
            }
        },
    }
})