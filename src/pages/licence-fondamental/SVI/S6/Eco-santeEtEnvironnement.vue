<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SVI-S6-Eco-sante-et-Environnement",
		meta: [
			{
				name: "description",
				content:
					"Licence Fondamental SVI-S6-Eco-sante-et-Environnement courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Changements globaux et impacts sur les ecosystemes",
			"Outils de management de l'environnement",
			"traitement et valorisation des dechets",
			"Eco-epidemiologie et Parasitologie",
		],
		slugs: [
			"Changements_globaux_et_impacts_sur_les_ecosystemes",
			"Outils_de_management_de_l'environnement",
			"traitement_et_valorisation_des_dechets",
			"Eco-epidemiologie_et_Parasitologie",
		],
		path: "/Licence Fondamental/S6/SVI/Eco-sante et Environnement",
	}),
};
</script>
