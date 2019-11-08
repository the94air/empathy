<template>
    <div class="container mx-auto px-4">
        <Slideout menu="#sidebar" panel="#content">
            <div class="container">
                <div class="flex -mx-4 md:-mx-3">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </Slideout>
        <notifications group="notifications" position="bottom right" width="320px">
            <template slot="body" slot-scope="props">
                <div class="flex justify-between items-center bg-black text-white rounded shadow-lg px-6 pt-2 pb-2 mb-3">
                    <p class="leading-tight" v-html="props.item.text"></p>
                    <button class="inline-block bg-transparent underline font-semibold text-yellow-500 hover:text-yellow-600 focus:text-yellow-600 focus:outline-none leading-tight select-none align-middle whitespace-no-wrap py-2 cursor-pointer ml-4" @click="props.close">
                        Close
                    </button>
                </div>
            </template>
        </notifications>
    </div>
</template>

<script>
    import Slideout from 'vue-slideout';
    import Sidebar from './Sidebar';
    import Content from './Content';

    export default {
        components: { Sidebar, Content, Slideout }
    }
</script>
