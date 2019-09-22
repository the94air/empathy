<template>
    <form @submit.prevent="(e) => {}">
        <div class="flex flex-wrap -mx-2 mb-6">
            <div class="w-full md:w-1/2 px-2 mb-4">
                <label class="inline-block font-semibold mb-2" for="full_name">Full name</label>
                <input class="block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500 py-2 px-3" type="text" id="full_name">
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
                <label class="inline-block font-semibold mb-2" for="email">Email</label>
                <input class="block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500 py-2 px-3 border-red-400 hover:border-red-300 focus:border-red-600" type="email" id="email">
                <span class="block text-red-600 text-sm mt-1">This field is required.</span>
            </div>
            <div class="w-full px-2 mb-2">
                <label class="font-semibold mb-2">Gender</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-2">
                <input type="radio" name="gender" id="male">
                <label class="text-lg" for="male">Male</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
                <input type="radio" name="gender" id="female">
                <label class="text-lg" for="female">Female</label>
            </div>
            <div class="w-full px-2 mb-2">
                <label class="font-semibold mb-2">Your hobbies</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-2">
                <input type="checkbox" id="basketball">
                <label class="text-lg" for="basketball">Basketball</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-2">
                <input type="checkbox" id="football">
                <label class="text-lg" for="football">Football</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-2">
                <input type="checkbox" id="tennis">
                <label class="text-lg" for="tennis">Tennis</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
                <input type="checkbox" id="golf">
                <label class="text-lg" for="golf">Golf</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
                <label class="inline-block font-semibold mb-2" for="profile_image">Profile image</label>
                <div class="file">
                    <input class="absolute h-0 w-0 border-0 overflow-hidden p-0 bg-transparent" type="file" id="profile_image" @change='showFileName' tabindex="0">
                    <label class="inline-block bg-gray-700 text-lg hover:bg-gray-800 focus:bg-gray-800 text-white font-semibold leading-tight rounded select-none align-middle whitespace-no-wrap px-3 py-2 cursor-pointer" for="profile_image">{{ inputFileName }}</label>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
                <label class="inline-block font-semibold mb-2" for="country">Country</label>
                <select class="relative block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500 px-3 py-2 pr-5" id="country">
                    <option value="">Select an option</option>
                    <option value="america">US</option>
                    <option value="unitedkingdom">UK</option>
                    <option value="japan">Japan</option>
                    <option value="china">China</option>
                </select>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label class="inline-block font-semibold mb-2" for="bio">Tell us more about you</label>
                <textarea class="block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500 py-2 px-3" id="bio"></textarea>
            </div>
            <div class="w-full md:w-1/2 px-2">
                <label class="inline-block font-semibold mb-2" for="favorite_fruit">What's your favorite fruit?</label>
                <select class="block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500" id="favorite_fruit" multiple>
                    <option value="banana">Banana</option>
                    <option value="mango">Mango</option>
                    <option value="apple">Apple</option>
                </select>
            </div>
        </div>
        <div class="w-full">
            <hr class="mt-0 mb-6">
            <button type="submit" class="inline-block bg-gray-700 text-lg hover:bg-gray-800 focus:bg-gray-800 text-white font-semibold focus:outline-none focus:shadow-outline leading-tight rounded select-none align-middle whitespace-no-wrap px-3 py-2 cursor-pointer">Submit</button>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                inputFileDefault: 'Choose file',
                inputFileName: 'Choose file',
            };
        },
        methods: {
            showFileName(e) {
                if(e.target.value != "") {
                    this.inputFileName = e.target.value.split(/(\\|\/)/g).pop();
                } else {
                    this.inputFileName = this.inputFileDefault;
                }
            },
        }
    }
</script>
