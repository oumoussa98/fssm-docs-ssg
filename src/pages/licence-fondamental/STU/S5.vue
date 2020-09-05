<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental STU-S5",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental STU-S5 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Geologie du Maroc I",
			"Geologie du Maroc II",
			"Metallogenie",
			"Hydrogeologie",
			"Geophysique",
			"Geochimie",
		],
		slugs: [
			"geologie_du_maroc_I",
			"geologie_du_maroc_II",
			"metallogenie",
			"hydrogeologie",
			"geophysique",
			"geochimie",
		],
		path: "/Licence Fondamental/S5/STU/",
	}),
};
</script>
