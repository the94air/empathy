# DataTable component
1. First we need to use the `vue-good-table` package in our `app.js`:
```javascript
import Vue from 'vue';
import App from './App';
import WebFont from 'webfontloader';
import Notifications from 'vue-notification';
import VueGoodTablePlugin from 'vue-good-table';

// ...

Vue.use(Notifications);
Vue.use(VueGoodTablePlugin);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
```

2. Then:
```javascript
<template>
    <div class="w-full">
        <DataTable
            :columns="columns"
            :rows="rows"
            :lineNumbers="true"
            :isLoading="false"
            :rtl="false"
            styleClass="vgt-table"
            :search-options="{
                enabled: true,
                placeholder: 'Search this table',
            }"
            :pagination-options="{
                enabled: true,
                mode: 'pages',
                perPage: 5,
                position: 'bottom',
                perPageDropdown: [5, 10, 20],
                dropdownAllowAll: false,
                setCurrentPage: 1,
                nextLabel: 'next',
                prevLabel: 'prev',
                rowsPerPageLabel: 'Rows per page',
                ofLabel: 'of',
                pageLabel: 'page',
                allLabel: 'All',
            }"
            :selectOptions="{
                enabled: true,
                selectOnCheckboxOnly: true,
                selectionText: 'rows selected',
                clearSelectionText: 'clear',
            }"
            @on-row-click="onRowClick"
            :groupOptions="{
  	            enabled: false
            }"
        >
            <div slot="table-actions">
                <button class="inline-block bg-green-700 hover:bg-green-800 focus:bg-green-800 text-white font-semibold focus:outline-none focus:shadow-outline leading-tight rounded select-none align-middle whitespace-no-wrap px-3 py-2 mr-1 cursor-pointer">Completed</button>
                <button class="inline-block bg-orange-700 hover:bg-orange-800 focus:bg-orange-800 text-white font-semibold focus:outline-none focus:shadow-outline leading-tight rounded select-none align-middle whitespace-no-wrap px-3 py-2 mr-1 cursor-pointer">Pending</button>
                <button class="inline-block bg-red-700 hover:bg-red-800 focus:bg-red-800 text-white font-semibold focus:outline-none focus:shadow-outline leading-tight rounded select-none align-middle whitespace-no-wrap px-3 py-2 cursor-pointer">Rejected</button>
            </div>
            <div slot="emptystate" class="text-center">
                <em>Table is empty.</em>
            </div>
        </DataTable>
    </div>
</template>

<script>
    import { VueGoodTable as DataTable } from 'vue-good-table';

    let btn = `
        <div class="text-center">
            <button class="inline-block bg-blue-700 text-sm hover:bg-blue-800 focus:bg-blue-800 text-white font-semibold focus:outline-none focus:shadow-outline leading-tight rounded select-none align-middle whitespace-no-wrap px-2 py-1 mb-1 md:mb-0 mr-2 cursor-pointer">Open</button>
            <button class="inline-block bg-green-700 text-sm hover:bg-green-800 focus:bg-green-800 text-white font-semibold focus:outline-none focus:shadow-outline leading-tight rounded select-none align-middle whitespace-no-wrap px-2 py-1 mb-1 md:mb-0 mr-2 cursor-pointer">Edit</button>
            <button class="inline-block bg-red-700 text-sm hover:bg-red-800 focus:bg-red-800 text-white font-semibold focus:outline-none focus:shadow-outline leading-tight rounded select-none align-middle whitespace-no-wrap px-2 py-1 mb-1 md:mb-0 cursor-pointer">Delete</button>
        </div>
    `;

    export default {
        data() {
            return {
                columns: [
                    { label: 'Name', field: 'name', filterOptions: {
                            enabled: false, // enable filter for this column
                            placeholder: 'Filter This Thing', // placeholder for filter input
                            filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        },
                    },
                    { label: 'Age', field: 'age', type: 'number', },
                    { label: 'Created On', field: 'createdAt', dateInputFormat: 'yyyy-MM-dd', dateOutputFormat: 'MMM dd, yyyy', type: 'date', },
                    { label: 'Percent', field: 'score', type: 'percentage', },
                    { label: 'Action', field: 'btn', html: true, filterOptions: {
                            enabled: false
                        },
                    },
                ],
                rows: [
					{ id:1, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343, btn: btn },
					{ id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343, btn: btn },
					{ id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343, btn: btn },
					{ id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343, btn: btn },
					{ id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343, btn: btn },
					{ id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343, btn: btn },
                ],
            };
        },
        components: { DataTable },
        methods: {
            onRowClick(params) {
                console.log('Clicked!');
            }
        }
    }
</script>
```