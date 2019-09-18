<template>
	<footer class="py-6">
		<div class="container mx-auto px-4">
			<p><small>&copy; Empathy {{ date }}</small></p>
		</div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				date: new Date().getFullYear()
			}
		}
	}
</script>