<template>
	<div class="w-full px-4 mt-32 sm:mb-16 md:px-2 md:w-4/6 lg:w-4/5 lg:px-3" id="content">
		<Breadcrumb />
		<h1 class="text-3xl mb-5">Dashboard</h1>
		<div class="bg-white shadow-md rounded-lg p-6 md:p-8 mb-10">
			<h2 class="mb-4 text-2xl">Horizontal form</h2>
			<HorizontalForm />
		</div>
		<div class="bg-white shadow-md rounded-lg p-6 md:p-8 mb-10">
			<h2 class="mb-4 text-2xl">Vertical form</h2>
			<VerticalForm />
		</div>
		<div class="mb-10">
			<h2 class="mb-4 text-2xl">Alerts</h2>
			<Alerts />
		</div>
		<div class="mb-10">
			<h2 class="mb-4 text-2xl">Buttons</h2>
			<Buttons />
		</div>
		<div class="mb-10">
			<h2 class="mb-4 text-2xl">Notifications</h2>
			<Notifications />
		</div>
		<div class="mb-10">
			<div class="bg-white shadow-md rounded-lg p-6 md:p-8 mb-10">
				<h2 class="mb-4 text-2xl">Tables</h2>
				<Table />
			</div>
		</div>
		<div class="">
			<div class="bg-white shadow-md rounded-lg p-6 md:p-8 mb-10">
				<h2 class="mb-4 text-2xl">DataTables</h2>
				<DataTable />
			</div>
		</div>
	</div>
</template>

<script>
	import Breadcrumb from './Breadcrumb';
	import HorizontalForm from './HorizontalForm';
	import VerticalForm from './VerticalForm';
	import Alerts from './Alerts';
	import Buttons from './Buttons';
	import Notifications from './Notifications';
	import Table from './Table';
	import DataTable from './DataTable';

	export default {
		components: { Breadcrumb, HorizontalForm, VerticalForm, Alerts, Buttons, Notifications, Table, DataTable },
	}
</script>