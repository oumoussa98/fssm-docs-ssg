<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SVI-S6-Biologie-de-Conservation",
		meta: [
			{
				name: "description",
				content:
					"Licence Fondamental SVI-S6-Biologie-de-Conservation courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Changements globaux et impacts sur les Socio-ecosystemes",
			"Outils de management de l'environnement",
			"Biologie de la Conservation",
			"Gestion Halieutique ET Cynegetique",
		],
		slugs: [
			"Changements_globaux_et_impacts_sur_les_Socio-ecosystemes",
			"Outils_de_management_de_environnement",
			"Biologie_de_la_Conservation",
			"Gestion_Halieutique_ET_Cynegetique",
		],
		path: "/Licence Fondamental/S6/SVI/Biologie de Conservation",
	}),
};
</script>
