<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMP-S6-Geologie-Appliquee",
		meta: [
			{
				name: "description",
				content:
					"Licence Fondamental SMP-S6-Geologie-Appliquee courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Bassins sedimentaires",
			"Series sedimentaires et exploration petroliere",
			"Geologie De LA MATIERE ORGANIQUE ET des Phosphates",
			"Geologie des hydrocarbures - systemes petroliers",
		],
		slugs: [
			"Metallogenie_typologique",
			"Cycle_de_lexploration_minerale",
			"Ecoulements_et_crues_dans_les_bassins_versants",
			"Hydrogeologie_et_Hydrochimie",
		],
		path: "/Licence Fondamental/S6/SMP/Geologie Appliquee",
	}),
};
</script>
