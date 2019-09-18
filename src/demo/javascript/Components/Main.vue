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
