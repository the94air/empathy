<template>
    <aside class="w-8/12 px-4 sm:w-5/12 md:mt-32 md:px-2 md:w-1/3 lg:w-1/5 lg:px-3" id="sidebar">
        <h2 class="text-base font-semibold uppercase mb-5">Menu</h2>
        <ul class="sidebar-menu flex flex-col select-none">
            <li>
                <a href="#" class="flex border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 rounded-r-lg no-underline py-2 px-3 select">
                    <span class="mr-3 text-gray-500">
                        <Fa :icon="['fas', 'home']" fixed-width />
                    </span>
                    Dashboard
                </a>
            </li>
            <li>
                <a href="#" class="flex border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 rounded-r-lg no-underline py-2 px-3">
                    <span class="mr-3 text-gray-500">
                        <Fa :icon="['fas', 'user']" fixed-width />
                    </span>
                    Profile
                </a>
            </li>
            <li>
                <a href="#" class="sidebar-dropdown flex border-l-2 border-gray-300 bg-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 rounded-r-lg no-underline py-2 px-3" @click.prevent="dropdown = !dropdown">
                	<span class="mr-3 text-gray-500">
                        <Fa :icon="['fas', 'cubes']" fixed-width />
                    </span>
                    <span class="w-full flex justify-between">
                    	<span class="text-gray-700">
	                         Resources
	                    </span>
	                    <span class="sidebar-angle text-gray-500 text-right">
	                        <Fa :icon="['fas', 'angle-right']" fixed-width :rotation="dropdown ? '90' : null" />
	                    </span>
                    </span>
                </a>
                <VueSlideUpDown class="ml-6" :active="dropdown" :duration="150" tag="ul">
                    <li>
                        <a href="#" class="block border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 py-2 px-3 no-underline rounded-r-lg">Posts</a>
                    </li>
                    <li>
                        <a href="#" class="block border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 py-2 px-3 no-underline rounded-r-lg">Pages</a>
                    </li>
                    <li>
                        <a href="#" class="block border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 py-2 px-3 no-underline rounded-r-lg">Submissions</a>
                    </li>
                    <li>
                        <a href="#" class="block border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 py-2 px-3 no-underline rounded-r-lg">Media</a>
                    </li>
                    <li>
                        <a href="#" class="block border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 py-2 px-3 no-underline rounded-r-lg select">Active</a>
                    </li>
                </VueSlideUpDown>
            </li>
            <li>
                <a href="#" class="flex border-l-2 border-gray-200 text-gray-700 hover:text-gray-700 focus:text-gray-700 hover:border-gray-500 focus:border-gray-500 hover:bg-gray-200 focus:bg-gray-200 rounded-r-lg no-underline py-2 px-3">
                    <span class="mr-3 text-gray-500">
                        <Fa :icon="['fas', 'users']" fixed-width />
                    </span>
                    Users
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
    import VueSlideUpDown from 'vue-slide-up-down';

    export default {
        data() {
            return {
                dropdown: false,
            };
        },
        components: { VueSlideUpDown }
    }
</script>
