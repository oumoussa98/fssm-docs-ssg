<template>
	<v-btn text fab @click="darkModeToggle">
		<v-icon large>{{ icon }}</v-icon>
	</v-btn>
</template>

<script>
export default {
	// Data =================================
	data: () => ({
		// light and dark mode
		icon: "",
		darkMode: null,
	}),
	// Methods =====================================
	methods: {
		enableDarkMode() {
			// 1. Add the class to the body
			this.$vuetify.theme.dark = true;
			this.icon = "mdi-weather-sunny";
			// 2. Update darkMode in localStorage
			localStorage.setItem("darkMode", "enabled");
		},

		disableDarkMode() {
			// 1. Remove the class from the body
			this.$vuetify.theme.dark = false;
			this.icon = "mdi-brightness-2";

			// 2. Update darkMode in localStorage
			localStorage.setItem("darkMode", null);
		},

		// toggle between dark and light mode
		darkModeToggle() {
			// get their darkMode setting
			this.darkMode = localStorage.getItem("darkMode");
			// if it not current enabled, enable it
			if (this.darkMode !== "enabled") {
				this.enableDarkMode();
				// if it has been enabled, turn it off
			} else {
				this.disableDarkMode();
			}
		},
	},
	// vueJs mounted function
	mounted() {
		// check for saved 'darkMode' in localStorage
		this.darkMode = localStorage.getItem("darkMode");
		// If the user already visited and enabled darkMode
		// start things off with it on
		if (this.darkMode === "enabled") {
			this.enableDarkMode();
		} else this.disableDarkMode();
	},
};
</script>
