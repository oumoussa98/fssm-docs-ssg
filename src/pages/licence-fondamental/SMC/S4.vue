<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMC-S4",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMC-S4 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Hydrocarbures & fonctions monovalentes",
			"Chimie descriptive 1",
			"Thermodynamique chimique",
			"Mecanique quantique",
			"Mathematiques",
			"Probabilites Statiques",
		],
		slugs: [
			"hydrocarbures_fonctions_monovalentes",
			"chimie_descriptive_1",
			"thermodynamique_chimique",
			"mecanique_quantique",
			"mathematiques",
			"probabilites_statiques",
		],
		path: "/Licence Fondamental/S4/SMC/",
	}),
};
</script>
