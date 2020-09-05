<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental STU-S1",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental STU-S1 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Biologie Cellulaire",
			"Embryologie et Histologie",
			"Geologie generale",
			"Mathematiques",
			"Physique I",
			"Chimie Generale I",
			"Langue et Terminologie I",
		],
		slugs: [
			"biologie_cellulaire",
			"embryologie_et_histologie",
			"geologie_generale",
			"mathematiques",
			"physique_I",
			"chimie_generale_I",
			"langue_et_terminologie_I",
		],
		path: "/Licence Fondamental/S1/STU/",
	}),
};
</script>
