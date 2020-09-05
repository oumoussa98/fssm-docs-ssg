<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMA-S5",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMA-S5 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Topologie",
			"Integration",
			"Calcul differentiel",
			"Programmation Mathematique",
			"Analyse numerique 2",
			"Informatique 5",
		],
		slugs: [
			"topologie",
			"intégration",
			"calcul_differentiel",
			"programmation_Mathematique",
			"analyse_numerique_2",
			"informatique_5",
		],
		path: "/Licence Fondamental/S5/SMA/",
	}),
};
</script>
