<template>
    <div class="w-full">
        <DataTable
            :columns="columns"
            :rows="rows"
            :lineNumbers="true"
            :rtl="false"
            styleClass="vgt-table"
            :search-options="{
                enabled: true,
                placeholder: 'Search this table',
            }"
            :pagination-options="{
                enabled: true,
                mode: 'pages',
                perPage: 3,
                position: 'bottom',
                perPageDropdown: [3, 7, 9],
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
                <button class="button success ml-2">Completed</button>
                <button class="button warning">Pending</button>
                <button class="button danger">Rejected</button>
            </div>
            <div slot="emptystate" class="text-center">
                <em>No data for table!</em>
            </div>
            <div slot="loadingContent">
                <span class="vgt-loading__content"></span>
            </div>
        </DataTable>
    </div>
</template>

<script>
    import { VueGoodTable as DataTable } from 'vue-good-table';

    let btn = `
        <div class="text-center">
            <button class="button info">Open</button>
            <button class="button success">Edit</button>
            <button class="button danger">Delete</button>
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
                    { label: 'Created On', field: 'createdAt', dateInputFormat: 'yyyy-MM-dd', dateOutputFormat: 'MMM Do yy', type: 'date', },
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
