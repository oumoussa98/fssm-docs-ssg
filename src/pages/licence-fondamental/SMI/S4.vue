<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMI-S4",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMI-S4 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Electromagnetisme",
			"Architecture des ordinateurs",
			"Analyse Numerique",
			"Systeme d'exploitation 2",
			"Structures de donnees",
			"Programmation 2",
		],
		slugs: [
			"electromagnetisme",
			"architecture_des_ordinateurs",
			"analyse_numerique",
			"systeme_exploitation_2",
			"structures_de_donnees",
			"programmation_2",
		],
		path: "/Licence Fondamental/S4/SMI/",
	}),
};
</script>
