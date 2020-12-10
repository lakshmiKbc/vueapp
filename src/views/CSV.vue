<template>
    <div class="container" id="csv_upload">
        <div class="row my-2" >
            <div class="col-6" >
            <!-- <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label text-left" for="customFile">Choose file</label>
            </div> -->
            <vue-csv-import
                v-model="csv"
                url="/hello"
                :map-fields="['name', 'age']"
                buttonClass="d-none"
                class="text-left">

                <template slot="hasHeaders" slot-scope="{headers, toggle}">
                    <label>
                        <input type="checkbox"  id="hasHeaders" :value="headers" @change="toggle">
                        Headers?
                    </label>
                </template>

                <template slot="error">
                    File type is invalid
                </template>

                <template slot="thead">
                    <tr>
                        <th>My Fields</th>
                        <th>Column</th>
                    </tr>
                </template>

                <template slot="next" slot-scope="{load}">
                    <button @click.prevent="load" class="btn btn-dark">load!</button>
                </template>

                <template slot="submit" slot-scope="{submit}">
                    <button @click.prevent="submit">send!</button>
                </template>
            </vue-csv-import>
            </div>
        </div>
    </div>
    
</template>
<script lang="ts">
    
// import { VueCsvImport } from 'vue-csv-import';
// import Vue from 'vue'

 export default {
        name: "csv_upload",
        data() {
            return {
                csv: null,
            };
        }
    };
    
</script>