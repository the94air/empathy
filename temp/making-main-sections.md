# Making main sections
1. We need to make 3 components for the main sections of the panel. The main component will contain the sidebar and the content section. We will get back to it later:
```javascript
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
```