<template>
    <div class="container">
        <div class="row">
        <div class="my-2 col-6">
            <h6 class="text-left">Select a table to edit:</h6>
            <select class="custom-select" id="table_select" @change="ontableChange($event)">
                <option v-for="table in table_list" v-bind:key="table.table_name" :value="table.table_name" :selected="table.table_name == selected_table.table_name">{{table.table_ui_name}}</option>
            </select>
        </div>
        <div class="table-responsive my-2 col-12">
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col" v-for="col in table_cols" v-bind:key="col.column_name">{{col.column_ui_name}}</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in table_content" :key="row.ID">
                        <td v-for="col in table_cols" :key="col.column_name">{{row[col.column_name]}}</td>
                        <td>
                            <div class="btn-group" role="group">
                                <button class="btn btn-outline-secondary icon-btn" type="button" @click="deleteRow(index)">
                                    <i class="mdi mdi-delete"></i>delete</button>
                                <button class="btn btn-outline-secondary icon-btn" type="button" v-if="editMode" @click="editRow(row,index)">
                                    <i class="mdi mdi-account-edit"></i>edit</button>
                                <button class="btn btn-outline-secondary icon-btn" type="button" v-if="!editMode" @click="updateRow(row, index)">
                                    <i class="mdi mdi-sticker-check-outline"></i>update
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
    
</template>
<script lang="ts">
    import axios from 'axios'
    
    export default {
        name: 'data_table',
        data() {
            return {
                table_list: null,
                selected_table : null,
                table_data : null,
                table_cols : null,
                table_content : null,
                editMode: true
            };
            },
        created: function() {
            axios
                .get('http://148.72.64.224:82/table_list')
                .then(res => {
                    this.table_list = res.data;
                    this.selected_table = res.data[0].table_name
                    axios.all([
                        axios.get('http://148.72.64.224:82/table_cols/' + this.selected_table),
                        axios.get('http://148.72.64.224:82/table_content/' + this.selected_table)
                    ])
                    .then(res => {
                        this.table_cols = res[0].data
                        this.table_content = res[1].data
                        // debugger
                    });
                })
        },
        methods : {
            ontableChange(event){
                axios.all([
                        axios.get('http://148.72.64.224:82/table_cols/' + event.target.value),
                        axios.get('http://148.72.64.224:82/table_content/' + event.target.value)
                    ])
                    .then(res => {
                        this.table_cols = res[0].data
                        this.table_content = res[1].data
                    });
            },
            editRow(row,i){
                this.editMode = false
                console.log(i, row)
            }
        }
    }

    
</script>