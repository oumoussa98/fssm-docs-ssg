<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title:
			"Licence Fondamental SMP-S6-Bassins-Sedimentaire-et-Georessources",
		meta: [
			{
				name: "description",
				content:
					"Licence Fondamental SMP-S6-Bassins-Sedimentaire-et-Georessources courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Bassins sedimentaires",
			"Series sedimentaires et exploration petroliere",
			"Geologie De La Matiere Organique ET des Phosphates",
			"Geologie des hydrocarbures - systemes petroliers",
		],
		slugs: [
			"Bassins_sedimentaires",
			"Series_sedimentaires_et_exploration_petroliere",
			"Geologie_De_LA_MATIERE_ORGANIQUE_ET_des_Phosphates",
			"Geologie_des_hydrocarbures_systemes_petroliers",
		],
		path:
			"/Licence Fondamental/S6/SMP/Bassins Sedimentaire et Georessources",
	}),
};
</script>
