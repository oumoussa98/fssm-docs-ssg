<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title:
			"Licence Fondamental SVI-S6-Biologie-Appliquee-Aux-Production-Vegetales",
		meta: [
			{
				name: "description",
				content:
					"Licence Fondamental SVI-S6-Biologie-Appliquee-Aux-Production-Vegetales courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Sol et Fertilisation et Pratiques Culturales",
			"Phytopathologie et Methodes de Lutte",
			"biodiversite et Metabolisme secondaire des plantes",
			"Biotechnologie et amelioration des plantes",
		],
		slugs: [
			"Sol_et_Fertilisation_et_Pratiques_Culturales",
			"Phytopathologie_et_Methodes_de_Lutte",
			"biodiversite_et_Metabolisme_secondaire_des_plantes",
			"Biotechnologie_et_amelioration_des_plantes",
		],
		path:
			"/Licence Fondamental/S6/SVI/Biologie Appliquee Aux Production Vegetales",
	}),
};
</script>
