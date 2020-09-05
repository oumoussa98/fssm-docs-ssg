<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMA-S4",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMA-S4 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Analyse 6",
			"ALGEBRE 5",
			"ALGEBRE 6",
			"Analyse Numérique 1",
			"Physique 6",
			"Informatique 4",
		],
		slugs: [
			"analyse_6",
			"algebre_5",
			"algebre_6",
			"analyse_numerique_1",
			"physique_6",
			"informatique_4",
		],
		path: "/Licence Fondamental/S4/SMA/",
	}),
};
</script>
