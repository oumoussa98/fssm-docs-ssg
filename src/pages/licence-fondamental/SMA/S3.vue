<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMA-S3",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMA-S3 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Analyse 4",
			"Analyse 5",
			"Algebre 4",
			"Probabilités Statistiques",
			"Physique 5",
			"Informatique 3",
		],
		slugs: [
			"analyse_4",
			"analyse_5",
			"algebre_4",
			"probabilites_statistiques",
			"physique_5",
			"informatique_3",
		],
		path: "/Licence Fondamental/S3/SMA/",
	}),
};
</script>
