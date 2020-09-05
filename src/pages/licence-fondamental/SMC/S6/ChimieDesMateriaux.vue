<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMC-S6-Chimie-des-Materiaux",
		meta: [
			{
				name: "description",
				content:
					"Licence Fondamental SMC-S6-Chimie-des-Materiaux courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Les grandes classes des reactions organiques",
			"Chimie descriptive II et chimie de coordination",
			"Chimie de solide",
			"Proprietes optiques et magnetiques",
		],
		slugs: [
			"les_grandes_classes_des_reactions_organiques",
			"chimie_descriptive_II_et_chimie_de_coordination",
			"chimie_de_solide",
			"proprietes_optiques_et_magnetiques",
		],
		path: "/Licence Fondamental/S6/SMP/Chimie des Materiaux",
	}),
};
</script>
