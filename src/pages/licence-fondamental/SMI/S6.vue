<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMI-S6",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMI-S6 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Intelligence Artificielle",
			"Conception Orientee object(UML)",
			"Programmation web",
			"Base de donnees 2",
		],
		slugs: [
			"intelligence_artificielle",
			"conception_orientee_object",
			"programmation_web",
			"base_de_donnees 2",
		],
		path: "/Licence Fondamental/S6/SMI/",
	}),
};
</script>
