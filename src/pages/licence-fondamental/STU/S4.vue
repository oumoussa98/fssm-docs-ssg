<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental STU-S4",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental STU-S4 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Petrographie sedimentaire",
			"Sedimentologie",
			"Paleontologie",
			"Stratigraphie",
			"Geoinformatique",
			"Chimie appliquee aux Sciences de la Terre",
		],
		slugs: [
			"petrographie_sedimentaire",
			"sedimentologie",
			"paleontologie",
			"stratigraphie",
			"geoinformatique",
			"chimie_appliquee_aux_sciences_de_la_terre",
		],
		path: "/Licence Fondamental/S4/STU/",
	}),
};
</script>
