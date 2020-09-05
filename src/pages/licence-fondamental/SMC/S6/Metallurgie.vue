<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMC-S6-Metallurgie",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMC-S6-Metallurgie courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Les grandes classes des reactions organiques",
			"Chimie descriptive II et chimie de coordination",
			"Metallurgie Extractive",
			"Electrochimie appliquee",
		],
		slugs: [
			"les_grandes_classes_des_reactions_organiques",
			"chimie_descriptive_II_et_chimie_de_coordination",
			"metallurgie_extractive",
			"electrochimie_appliquee",
		],
		path: "/Licence Fondamental/S6/SMP/Metallurgie",
	}),
};
</script>
