<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMP-S4",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMP-S4 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			" Electronique de base",
			"Optique physique",
			"Electricite 3",
			"Mecanique quantique",
			"Cristallographie geometrique",
			"Informatique",
		],
		slugs: [
			"electronique_de base",
			"optique_physique",
			"electricite_3",
			"mecanique_quantique",
			"cristallographie_geometrique",
			"informatique",
		],
		path: "/Licence Fondamental/S4/SMP/",
	}),
};
</script>
