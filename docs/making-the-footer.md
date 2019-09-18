# Making the navbar
1. To make a footer use this component:
```javascript
<template>
	<footer class="py-6">
		<div class="container mx-auto px-4">
			&copy; Empathy {{ date }}
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
```

2. The footer will not show up because of the fixed navbar. You can add a `margin-bottom` the body element to make it visible but we will add it later.