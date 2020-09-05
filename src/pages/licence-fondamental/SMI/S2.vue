<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMI-S2",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMI-S2 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Analyse 2",
			"Analyse 3",
			"Algebre 3",
			"Physique 3",
			"Physique 4",
			"Informatique 2",
			"Langue & terminologie 2",
		],
		slugs: [
			"analyse_2",
			"analyse_3",
			"algebre_3",
			"physique_3",
			"physique_4",
			"informatique_2",
			"langue_terminologie_2",
		],
		path: "/Licence Fondamental/S2/SMI/",
	}),
};
</script>
