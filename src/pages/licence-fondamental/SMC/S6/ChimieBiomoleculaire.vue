<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMC-S6-Chimie-Biomoleculaire",
		meta: [
			{
				name: "description",
				content:
					"Licence Fondamental SMC-S6-Chimie-Biomoleculaire courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Les grandes classes des reactions organiques",
			"Chimie descriptive II et chimie de coordination",
			"Gestion de la  qualite et accreditation",
			"Metrologie",
		],
		slugs: [
			"les_grandes_classes_des_reactions_organiques",
			"chimie_descriptive_II_et_chimie_de_coordination",
			"gestion_de_la _qualite_et_accreditation",
			"metrologie",
		],
		path: "/Licence Fondamental/S6/SMP/Chimie Biomoleculaire",
	}),
};
</script>
