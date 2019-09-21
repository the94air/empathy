<template>
	<div class="flex flex-wrap -mx-3">
		<div class="w-full lg:w-1/2 px-3 mb-5 lg:mb-0">
			<div class="flex justify-between items-center bg-black text-white rounded shadow-lg px-6 pt-2 pb-2">
                <p class="leading-tight">Your new post has been created.</p>
                <button class="inline-block bg-transparent underline font-semibold text-yellow-500 hover:text-yellow-600 focus:text-yellow-600 focus:outline-none leading-tight select-none align-middle whitespace-no-wrap py-2 cursor-pointer ml-4">
                    Close
                </button>
            </div>
		</div>
		<div class="w-full lg:w-1/2 px-3">
			<button type="button" class="inline-block bg-gray-700 text-lg hover:bg-gray-800 focus:bg-gray-800 text-white font-semibold focus:outline-none focus:shadow-outline leading-tight rounded select-none align-middle whitespace-no-wrap px-3 py-2 cursor-pointer" @click="showNotification()">Show a notification</button>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			showNotification() {
				this.$notify({
					group: 'notifications',
					text: 'Your new post has been created.',
					duration: 5000,
				});
			}
		}
	}
</script>