# Form components

1. Horixontal form
```javascript
<template>
    <form @submit.prevent="(e) => {}">
        <div class="flex flex-wrap -mx-2 mb-6">
            <div class="w-full md:w-1/2 px-2 mb-2">
                <label class="inline-block font-semibold mb-4" for="full_name">Full name</label>
                <input class="block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500 py-2 px-3" type="text" id="full_name">
            </div>
            <div class="w-full md:w-1/2 px-2 mb-2">
                <label class="inline-block font-semibold mb-4" for="email">Email</label>
                <input class="block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500 py-2 px-3 border-red-400 hover:border-red-300 focus:border-red-600" type="email" id="email">
                <span class="block mt-2 text-red-600 text-sm mb-2">This field is required.</span>
            </div>
            <div class="w-full px-2 mb-2">
                <label class="font-semibold">Gender</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
                <input type="radio" name="gender" id="male">
                <label class="text-lg" for="male">Male</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
                <input type="radio" name="gender" id="female">
                <label class="text-lg" for="female">Female</label>
            </div>
            <div class="w-full px-2 mb-2">
                <label class="font-semibold">Your hobbies</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-2">
                <input type="checkbox" id="basketball">
                <label class="text-lg" for="basketball">Basketball</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-2">
                <input type="checkbox" id="football">
                <label class="text-lg" for="football">Football</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
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
                <select class="relative block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500 px-3 py-2 pr-5 mb-2" id="country">
                    <option value="">Select an option</option>
                    <option value="america">US</option>
                    <option value="unitedkingdom">UK</option>
                    <option value="japan">Japan</option>
                    <option value="china">China</option>
                </select>
            </div>
            <div class="w-full md:w-1/2 px-2">
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
```

2. Vertical Form
```javascript
<template>
    <form @submit.prevent="(e) => {}">
        <div class="flex flex-wrap items-start -mx-2 mb-6">
            <div class="w-full md:w-1/2 px-2">
                <label class="inline-block font-semibold mb-4 mt-2" for="full_name2">Full name</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-2">
                <input class="block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500 py-2 px-3 mb-4" type="text" id="full_name2">
            </div>
            <div class="w-full md:w-1/2 px-2">
                <label class="inline-block font-semibold mb-4 mt-2" for="email2">Email</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-2">
                <input class="block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500 py-2 px-3 border-red-400 hover:border-red-300 focus:border-red-600 mb-4" type="email" id="email2">
                <span class="block mt-2 text-red-600 text-sm mb-2">This field is required.</span>
            </div>
            <div class="w-full md:w-1/2 px-2">
                <label class="font-semibold mb-4">Gender</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-2">
                <div class="w-full mb-2">
                    <input type="radio" name="gender" id="male2">
                    <label class="text-lg" for="male2">Male</label>
                </div>
                <div class="w-full mb-4">
                    <input type="radio" name="gender" id="female2">
                    <label class="text-lg" for="female2">Female</label>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-2">
                <label class="font-semibold mb-4">Your hobbies</label>
            </div>
            <div class="flex flex-wrap w-full md:w-1/2 px-2">
                <div class="w-full md:w-1/2 mb-2">
                    <input type="checkbox" id="basketball2">
                    <label class="text-lg" for="basketball2">Basketball</label>
                </div>
                <div class="w-full md:w-1/2 mb-2">
                    <input type="checkbox" id="football2">
                    <label class="text-lg" for="football2">Football</label>
                </div>
                <div class="w-full md:w-1/2 mb-4">
                    <input type="checkbox" id="tennis2">
                    <label class="text-lg" for="tennis2">Tennis</label>
                </div>
                <div class="w-full md:w-1/2 mb-4">
                    <input type="checkbox" id="golf2">
                    <label class="text-lg" for="golf2">Golf</label>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-2">
                <label class="inline-block font-semibold mb-2 mt-2" for="profile_image2">Profile image</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
                <div class="file">
                    <input class="absolute h-0 w-0 border-0 overflow-hidden p-0 bg-transparent" type="file" id="profile_image2" @change='showFileName' tabindex="0">
                    <label class="inline-block bg-gray-700 text-lg hover:bg-gray-800 focus:bg-gray-800 text-white font-semibold leading-tight rounded select-none align-middle whitespace-no-wrap px-3 py-2 mb-2 cursor-pointer" for="profile_image2">{{ inputFileName }}</label>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-2">
                <label class="inline-block font-semibold mb-2 mt-2" for="country2">Country</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
                <select class="relative block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500 px-3 py-2 pr-5 mb-2" id="country2">
                    <option value="">Select an option</option>
                    <option value="america">US</option>
                    <option value="unitedkingdom">UK</option>
                    <option value="japan">Japan</option>
                    <option value="china">China</option>
                </select>
            </div>
            <div class="w-full md:w-1/2 px-2">
                <label class="inline-block font-semibold mb-2 mt-2" for="bio2">Tell us more about you</label>
            </div>
            <div class="w-full md:w-1/2 px-2 mb-4">
                <textarea class="block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500 py-2 px-3 mb-2" id="bio2"></textarea>
            </div>
            <div class="w-full md:w-1/2 px-2">
                <label class="inline-block font-semibold mb-2 mt-2" for="favorite_fruit2">What's your favorite fruit?</label>
            </div>
            <div class="w-full md:w-1/2 px-2">
                <select class="block w-full appearance-none bg-white text-lg leading-tight rounded focus:outline-none border border-solid border-gray-400 hover:border-gray-300 focus:border-gray-500" id="favorite_fruit2" multiple>
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
```