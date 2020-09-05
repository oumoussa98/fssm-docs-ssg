<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMI-S5",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMI-S5 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Programmation orientee Java",
			"Systeme d'information",
			"Compilation",
			"Base de donnees",
			"Recherche operationnelle",
			"Reseaux",
		],
		slugs: [
			"programmation_orientee_java",
			"systeme_information",
			"compilation",
			"base_de_donnees",
			"recherche_operationnelle",
			"reseaux",
		],
		path: "/Licence Fondamental/S5/SMI/",
	}),
};
</script>
