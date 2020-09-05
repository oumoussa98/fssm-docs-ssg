<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMC-S6-Spectroscopie",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMC-S6-Spectroscopie courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Les grandes classes des reactions organiques",
			"Chimie descriptive II et chimie de coordination",
			"Determination structurale et stereochimique",
			"Methodes d'analyse et de caracterisation",
		],
		slugs: [
			"les_grandes_classes_des_reactions_organiques",
			"chimie_descriptive_II_et_chimie_de_coordination",
			"determination_structurale_et_stereochimique",
			"methodes_analyse_et_de_caracterisation",
		],
		path: "/Licence Fondamental/S6/SMP/Spectroscopie",
	}),
};
</script>
