<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title:
			"Licence Fondamental SVI-S6-Biologie-Appliquee-a-la-Gestion-de-Environnement",
		meta: [
			{
				name: "description",
				content:
					"Licence Fondamental SVI-S6-Biologie-Appliquee-a-la-Gestion-de-Environnement courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Changements globaux et impacts sur les Socio-ecosystemes",
			"Outils de management de l’environnement",
			"Microbiologie environnementale",
			"Diagnostic ecologique et techniques d’analyse",
		],
		slugs: [
			"Changements_globaux_et_impacts_sur_les_Socio-ecosystemes",
			"Outils_de_management_de_lenvironnement",
			"Microbiologie_environnementale",
			"Diagnostic_ecologique_et_techniques_danalyse",
		],
		path:
			"/Licence Fondamental/S6/SVI/Biologie Appliquee a la Gestion de l'Environnement",
	}),
};
</script>
