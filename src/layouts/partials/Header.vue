<template>
	<div class="header">
		<v-app-bar app>
			<!--------------- Brand area --------------->
			<div class="d-flex align-center">
				<g-link to="/">
					<g-image
						alt="FSSM Logo"
						src="@/assets/images/fssm.png"
						transition="scale-transition"
						width="80"
					/>
				</g-link>
			</div>
			<v-spacer></v-spacer>
			<div class="my-2">
				<v-btn depressed color="light-blue accent-4" dark to="/upload">
					Upload Files
				</v-btn>
			</div>

			<v-spacer></v-spacer>
			<!---------------- button for mobile devices ------------------------>
			<v-btn
				icon
				@click="drawer = true"
				class="d-sm-none d-flex float-right"
			>
				<v-icon large>mdi-menu</v-icon>
			</v-btn>
			<!------------------ Links for computer devices -------------------->
			<g-link
				class="d-none d-sm-flex links"
				v-for="link in links"
				:key="link.name"
				:to="link.href"
			>
				<v-btn class="btn" text>
					{{ link.name }}
				</v-btn>
			</g-link>
			<v-spacer class="d-none d-sm-flex"></v-spacer>
			<DarkLight class="d-none d-sm-flex " />
		</v-app-bar>
		<!-- navigation drawer on mobile version -->
		<v-navigation-drawer v-model="drawer" absolute temporary>
			<v-list nav dense>
				<v-list-item-group
					v-model="group"
					active-class="deep-purple--text text--accent-4"
				>
					<v-list-item
						color="green"
						v-for="(link, i) in links"
						:key="i"
						:to="link.href"
					>
						<v-list-item-icon>
							<v-icon>{{ link.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-title>{{ link.name }}</v-list-item-title>
					</v-list-item>
					<v-list>
						Dark and Light mode <DarkLight class="ml-4" />
					</v-list>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>
<script>
import DarkLight from "@/components/DarkLight";
export default {
	components: {
		DarkLight,
	},
	data: () => ({
		// Links ----------------------
		links: [
			{ name: "Home", href: "/", icon: "mdi-home" },
			{ name: "About", href: "/about", icon: "mdi-information" },
			{ name: "Contact", href: "/contact", icon: "mdi-contacts" },
		],

		drawer: false,
		group: "",
	}),
};
</script>
