<template>
      <div>
         <v-toolbar flat color="white" class="mb-1">
            <v-toolbar-title>Exercises</v-toolbar-title>
         </v-toolbar>
         <v-data-table :headers="headers" :items="Exercises" class="elevation-1">
            <template v-slot:items="props">
               <td>{{ props.item.id }}</td>
               <td class="">{{ props.item.name }}</td>
               <td class="">{{ props.item.difficulty }}</td>
               <td class="">{{ props.item.solvedTimes }}</td>
               <td class="justify-center layout px-0">
                  <v-icon
                          small
                          class="mr-2"
                          @click="editItem(props.item)"
                  >
                     edit
                  </v-icon>
                  <v-icon
                          small
                          @click="deleteItem(props.item)"
                  >
                     delete
                  </v-icon>
               </td>
            </template>
            <template v-slot:no-data>
               <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
         </v-data-table>
      </div>
</template>

<script>
   export default {
      name: "exercises",
      data: () => ({
         dialog: false,
         headers: [
            { text: 'ID',  value: 'id', sortable: true, align: 'left'},
            { text: 'Name', value: 'name', sortable: true, align: 'left'},
            { text: 'Difficulty', value: 'difficulty', sortable: true, align: 'left'},
            { text: 'Solved by', value: 'solvedTimes', sortable: true, align: 'left'},
            { text: 'Actions', value: 'actions', sortable: false, align: 'left'}
         ],
         Exercises: [],
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
            this.Exercises = [
               {
                  id: 0,
                  name: 'Problem a',
                  difficulty: 1,
                  solvedTimes: 13,
               },
               {
                  id: 1,
                  name: 'Problem b',
                  difficulty: 1,
                  solvedTimes: 0,
               },
               {
                  id: 2,
                  name: 'Problem c',
                  difficulty: 2,
                  solvedTimes: 20,
               },
               {
                  id: 3,
                  name: 'Problem d',
                  difficulty: 3,
                  solvedTimes: 1598,
               },
               {
                  id: 4,
                  name: 'Problem e',
                  difficulty: 4,
                  solvedTimes: 30,
               },
               {
                  id: 5,
                  name: 'Problem f',
                  difficulty: 2,
                  solvedTimes: 21,
               },
               {
                  id: 6,
                  name: 'Problem g',
                  difficulty: 1,
                  solvedTimes: 15,
               },
               {
                  id: 7,
                  name: 'Problem h',
                  difficulty: 3,
                  solvedTimes: 18,
               },
               {
                  id: 8,
                  name: 'Problem i',
                  difficulty: 3,
                  solvedTimes: 6.0,
               },
               {
                  id: 9,
                  name: 'Problem j',
                  difficulty: 4,
                  solvedTimes: 55,
               },
               {
                  id: 10,
                  name: 'Problem k',
                  difficulty: 5,
                  solvedTimes: 75,
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