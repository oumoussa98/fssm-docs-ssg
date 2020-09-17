<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMP-S6-Physique-de-la-Matiere-Condensee",
		meta: [
			{
				name: "description",
				content:
					"Licence Fondamental SMP-S6-Physique-de-la-Matiere-Condensee courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Physique statistique II",
			"Physique atomique",
			"Physique du solide",
			"Metrologie et Capteurs",
		],
		slugs: [
			"physique_statistique_II",
			"physique_atomique",
			"physique_du_solide",
			"metrologie_et_capteurs",
		],
		path: "/Licence Fondamental/S6/SMP/Physique de la Matiere Condensee",
	}),
};
</script>
