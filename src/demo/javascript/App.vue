<template>
    <div class="h-full">
		<Navbar />
		<Main />
		<Footer />
    </div>
</template>

<script>
    import Navbar from './Components/Navbar';
    import Main from './Components/Main';
    import Footer from './Components/Footer';

    export default {
        components: { Navbar, Main, Footer }
    }
</script>