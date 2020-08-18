<template>
	<v-container class="text-center mt-10">
		<h1 class="pt-4 pb-4 text-h2">Error 404</h1>
		<h2 class="pb-10 text-h4">
			Sorry the page you're looking for doesn't exist
		</h2>
		<v-btn text color="primary" to="/">
			<v-icon left>mdi-arrow-left</v-icon>Back Home
		</v-btn>
	</v-container>
</template>

<script>
export default {
	metaInfo: () => ({
		title: "404 Not Found",
	}),
};
</script>

<style></style>
