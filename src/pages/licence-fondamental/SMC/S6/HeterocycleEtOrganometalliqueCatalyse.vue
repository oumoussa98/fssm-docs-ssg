<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title:
			"Licence Fondamental SMC-S6-Heterocycleet-Organometallique-Catalyse",
		meta: [
			{
				name: "description",
				content:
					"Licence Fondamental SMC-S6-Heterocycleet-Organometallique-Catalyse courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Les grandes classes des reactions organiques",
			"Chimie descriptive II et chimie de coordination",
			"Chimie organique heterocyclique",
			"Chimie organometallique et catalyse",
		],
		slugs: [
			"les_grandes_classes_des_reactions_organiques",
			"chimie_descriptive_II_et_chimie_de_coordination",
			"chimie_organique_heterocyclique",
			"chimie_organometallique_et_catalyse",
		],
		path:
			"/Licence Fondamental/S6/SMC/Heterocycle et Organometallique-Catalyse",
	}),
};
</script>
