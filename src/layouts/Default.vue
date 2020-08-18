<template>
	<v-app dark>
		<Header />
		<v-container class="mt-10">
			<transition name="fade">
				<slot />
			</transition>
		</v-container>
	</v-app>
</template>

<script>
import Header from "@/layouts/partials/Header";

export default {
	components: {
		Header,
	},
};
</script>
<style>
a {
	font-weight: bold;
	color: #2c3e50;
	text-decoration: none;
}

.active--exact .btn {
	color: #42b983;
	pointer-events: none;
}

.fade-enter-active {
	transition: all 0.6s;
}
.fade-enter {
	opacity: 0;
}
</style>
