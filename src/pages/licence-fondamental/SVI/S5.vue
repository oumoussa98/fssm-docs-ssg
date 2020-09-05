<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SVI-S5",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SVI-S5 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Physiologie des Grandes Fonctions",
			"Croissance et developpement des plantes",
			"Ecologie Generale II",
			"Immunologie",
			"Genetique",
			"Biologie moleculaire",
		],
		slugs: [
			"Physiologie_des_grandes_fonctions",
			"Croissance_et_developpement_des_plantes",
			"Ecologie_generale_II",
			"Immunologie",
			"Genetique",
			"Biologie_moleculaire",
		],
		path: "/Licence Fondamental/S5/SVI/",
	}),
};
</script>
