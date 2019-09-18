<template>
	<nav class="fixed z-20 inset-x-0 top-0 bg-white shadow">
		<div class="container px-4 mx-auto">
			<div class="flex justify-between items-center flex-wrap">
				<div>
					<a href="#" class="block no-underline py-3">
						<div class="flex items-center">
							<img src="images/empathy-gray.svg" class="mr-2 w-24" alt="Empathy">
						</div>
					</a>
				</div>
				<div class="md:hidden py-4">
					<button class="bg-white border border-gray-400 rounded-sm py-2 px-3 focus:outline-none focus:shadow-outline" @click="navbar = !navbar">
						<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>
				<div class="navbar-menu hidden md:block w-full md:w-auto mb-5 md:mb-0" :class="[navbar ? 'show' : '']">
					<ul class="flex flex-col md:flex-row">
						<li class="relative py-0 md:py-5 mr-0 md:mr-5">
							<a href="#" class="block md:inline w-full md:w-auto px-3 py-3 md:px-0 md:py-5 no-underline text-gray-700 hover:text-gray-600 select">Home</a>
						</li>
						<li class="relative py-0 md:py-5 mr-0 md:mr-5">
							<a href="#" class="block md:inline w-full md:w-auto px-3 py-3 md:px-0 md:py-5 no-underline text-gray-700 hover:text-gray-600">Sign In</a>
						</li>
						<li class="relative py-0 md:py-5 mr-0 md:mr-5">
							<a href="#" class="block md:inline w-full md:w-auto px-3 py-3 md:px-0 md:py-5 no-underline text-gray-700 hover:text-gray-600">Messages</a>
						</li>
						<li class="relative py-0 md:py-5 mr-0 md:mr-5">
							<a href="#" class="block md:inline w-full md:w-auto px-3 py-3 md:px-0 md:py-5 no-underline text-gray-700 hover:text-gray-600">Tasks</a>
						</li>
						<li class="relative py-0 md:py-5 my-1 md:my-0 md:my-0 mr-0 md:mr-5">
							<a href="#" class="block md:inline w-full md:w-auto bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 rounded px-3 py-2 md:px-2 md:py-2 no-underline text-gray-700 hover:text-gray-700" @click.prevent="navbarDropdown = !navbarDropdown">Settings</a>
							<transition name="dropdown">
	                            <ul class="navbar-dropdown absolute right-0 md:mt-8 z-20 bg-white rounded shadow-md p-2" v-show="navbarDropdown">
	                                <li class="block mb-2">
	                                    <a href="#" class="block no-underline rounded hover:bg-gray-700 focus:bg-gray-700 text-gray-700 hover:text-white focus:text-white px-3 py-1">Projects settings</a>
	                                </li>
	                                <li class="block mb-2">
	                                	<a href="#" class="block no-underline rounded hover:bg-gray-700 focus:bg-gray-700 text-gray-700 hover:text-white focus:text-white px-3 py-1">Products settings</a>
	                                </li>
	                                <li class="block">
	                                	<a href="#" class="block no-underline rounded hover:bg-gray-700 focus:bg-gray-700 text-gray-700 hover:text-white focus:text-white px-3 py-1">Admin settings</a>
	                                </li>
	                            </ul>
	                        </transition>
						</li>
						<li class="relative py-0 md:py-2">
							<a href="#" class="block md:inline-block px-2 rounded bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 no-underline" @click.prevent="avatarDropdown = !avatarDropdown">
	                            <div class="flex items-center py-1">
	                            	<div class="flex flex-col items-start mr-2">
		                                <p class="text-sm text-gray-700">John Doe</p>
		                                <p class="flex items-center">
		                                	<span class="inline-block rounded-full h-3 w-3 bg-green-500 border-2 border-green-300 mr-1"></span>
		                                	<span class="uppercase text-xs font-bold text-gray-700">Online</span>
		                                </p>
		                            </div>
		                            <div>
		                            	<img class="h-8 w-8 rounded-full" src="images/avatar.jpeg" alt="@john__doe" title="@john__doe">
		                            </div>
	                            </div>
	                        </a>
	                        <transition name="dropdown">
	                            <ul class="navbar-dropdown absolute right-0 md:mt-5 z-20 bg-white rounded shadow-md p-2" v-show="avatarDropdown">
	                                <li class="block mb-2">
	                                    <a href="#" class="block no-underline rounded hover:bg-gray-700 focus:bg-gray-700 text-gray-700 hover:text-white focus:text-white px-3 py-1">Profile</a>
	                                </li>
	                                <li class="block">
	                                	<a href="#" class="block no-underline rounded hover:bg-gray-700 focus:bg-gray-700 text-gray-700 hover:text-white focus:text-white px-3 py-1">Sign out</a>
	                                </li>
	                            </ul>
	                        </transition>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				navbar: false,
				navbarDropdown: false,
				avatarDropdown: false,
			}
		}
	}
</script>

<style scoped>
    .dropdown-enter-active, .dropdown-leave-active {
        transition: all 150ms ease;
    }
    .dropdown-enter, .dropdown-leave-to  {
        transform: translateY(-10px) translateX(10px);
        opacity: 0;
    }
</style>