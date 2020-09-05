<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMI-S3",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMI-S3 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"electronique",
			"Technologie du web",
			"Probabilites- Statistique",
			"Systeme d'exploitation 1",
			"Algorithmique 2",
			"Programmation 1",
		],
		slugs: [
			"electronique",
			"technologie_du_web",
			"probabilites-_statistique",
			"systeme_exploitation_1",
			"algorithmique_2",
			"programmation_1",
		],
		path: "/Licence Fondamental/S3/SMI/",
	}),
};
</script>
