<template>
    <div>
        <v-toolbar flat color="white" class="mb-1">
            <v-toolbar-title>Queue</v-toolbar-title>
        </v-toolbar>
        <v-data-table :headers="headers" :items="Jobs" class="elevation-1">
            <template v-slot:items="props">
                <td>{{ props.item.id }}</td>
                <td class="">{{ props.item.name }}</td>
                <td class="">{{ jobStatus[props.item.status] }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    export default {
        name: "exercises",
        data: () => ({
            headers: [
                { text: 'ID',  value: 'id', sortable: true, align: 'left'},
                { text: 'Problem', value: 'name', sortable: true, align: 'left'},
                { text: 'Status', value: 'difficulty', sortable: false, align: 'left'},
            ],
            Jobs: [],
            jobStatus: [
                "Submited",
                "Evaluating",
                "Evaluated"
            ]
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
                this.Jobs = [
                    {
                        id: 0,
                        name: 'Job a',
                        status: 0,
                    },
                    {
                        id: 1,
                        name: 'Job b',
                        status: 0,
                    },
                    {
                        id: 2,
                        name: 'Job c',
                        status: 0,
                    },
                    {
                        id: 3,
                        name: 'Job d',
                        status: 0,
                    },
                    {
                        id: 4,
                        name: 'Job e',
                        status: 0,
                    },
                    {
                        id: 5,
                        name: 'Job f',
                        status: 0,
                    },
                    {
                        id: 6,
                        name: 'Job g',
                        status: 0,
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