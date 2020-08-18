<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMC-S5",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMC-S5 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Chimie organique fonctionnelle",
			"Radiocristallographie & cristallochimie 2",
			"Cinetique et catalyse",
			"Chimie theorique",
			"electrochimie",
			"Techniques spectroscopiques d’analyse",
		],
		slugs: [
			"chimie_organique_fonctionnelle",
			"radiocristallographie_cristallochimie_2",
			"cinetique_et_catalyse",
			"chimie_theorique",
			"electrochimie",
			"techniques_spectroscopiques_danalyse",
		],
		path: "/Licence Fondamental/S5/SMC/",
	}),
};
</script>
