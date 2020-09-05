<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental STU-S3",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental STU-S3 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Tectonique analytique",
			"Tectonique globale",
			"Petrologie magmatique",
			"Petrologie metamorphique",
			"Physique appliquee aux Sciences de la Terre",
			"Statistiques",
		],
		slugs: [
			"tectonique_analytique",
			"tectonique_globale",
			"petrologie_magmatique",
			"petrologie_metamorphique",
			"physique_appliquee_aux_sciences_de_la_terre",
			"statistiques",
		],
		path: "/Licence Fondamental/S3/STU/",
	}),
};
</script>
