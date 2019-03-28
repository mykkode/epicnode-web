<template>
    <div>
        <v-toolbar flat color="white" class="mb-1">
            <v-toolbar-title>Top</v-toolbar-title>
        </v-toolbar>
        <v-data-table :headers="headers" :items="Top" class="elevation-1">
            <template v-slot:items="props">
                <td>{{ props.item.place }}</td>
                <td class="">{{ props.item.username }}</td>
                <td class="">{{ props.item.rating }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    export default {
        name: "exercises",
        data: () => ({
            headers: [
                { text: 'Place',  value: 'place', sortable: true, align: 'left'},
                { text: 'User', value: 'username', align: 'left'},
                { text: 'Rating', value: 'rating', sortable: false, align: 'left'},
            ],
            Top: [],
        }),

        computed: {

        },

        watch: {
            dialog (val) {
                val || this.close()
            }
        },

        created () {
            this.initialize()
        },

        methods: {
            initialize: function () {
                this.Top = [
                    {
                        place: 1,
                        username: 'mykkode',
                        rating: 12354,
                    },
                    {
                        place: 2,
                        username: 'arnold',
                        rating: 4445,
                    },
                    {
                        place: 3,
                        username: 'freddy',
                        rating: 3123,
                    },
                    {
                        place: 4,
                        username: 'obi one',
                        rating: 1444,
                    },
                    {
                        place: 5,
                        username: 'whoo hooo',
                        rating: 354,
                    },

                ]
            },

            editItem (item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                const index = this.desserts.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
            },

            close () {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save () {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            }
        }
    }
</script>

<style scoped>

</style>