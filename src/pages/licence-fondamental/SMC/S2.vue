<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMC-S2",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMC-S2 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Electrostatique & Electrocinetique",
			"Optique geometrique",
			"Liaisons chimiques",
			"Chimie des Solutions",
			"Analyse 2",
			"Algebre 2",
			"Langue & terminologie 2",
		],
		slugs: [
			"electrostatique_Electrocinetique",
			"optique_geometrique",
			"liaisons_chimiques",
			"chimie_des_solutions",
			"cnalyse_2",
			"clgebre_2",
			"langue_terminologie_2",
		],
		path: "/Licence Fondamental/S2/SMP/",
	}),
};
</script>
