<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMP-S3",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMP-S3 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			" Mecanique du solide",
			" Thermodynamique 2",
			" electromagnetisme dans le vide",
			" Chimie Organique generale",
			" Analyse 3",
			"Analyse numerique et algorithme",
		],
		slugs: [
			"mecanique_du_solide",
			"thermodynamique_2",
			"electromagnetisme_dans_le_vide",
			"chimie_organique_generale",
			"analyse_3",
			"analyse_numerique_et_algorithme",
		],
		path: "/Licence Fondamental/S3/SMP/",
	}),
};
</script>
