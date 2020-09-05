<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SVI-S4",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SVI-S4 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Enzymologie & Biochimie Metabolique",
			"Genetique",
			"Faunistique",
			"Floristique",
			"Physiologie animale",
			"Physiologie vegetale",
		],
		slugs: [
			"enzymologie_biochimie_metabolique",
			"genetique",
			"faunistique",
			"floristique",
			"physiologie_animale",
			"physiologie_vegetale",
		],
		path: "/Licence Fondamental/S4/SVI/",
	}),
};
</script>
