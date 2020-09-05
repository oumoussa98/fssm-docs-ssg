<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMC-S6-Metrologie-et-Qualite",
		meta: [
			{
				name: "description",
				content:
					"Licence Fondamental SMC-S6-Metrologie-et-Qualite courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Les grandes classes des reactions organiques",
			"Chimie descriptive II et chimie de coordination",
			"Chimie des biomolecules d’origine vegetale",
			"Chimie des biomolecules de synthese",
		],
		slugs: [
			"les_grandes_classes_des_reactions_organiques",
			"chimie_descriptive_II_et_chimie_de_coordination",
			"chimie_des_biomolecules_origine_vegetale",
			"chimie_des_biomolecules_de_synthese",
		],
		path: "/Licence Fondamental/S6/SMP/Metrologie et Qualite",
	}),
};
</script>
