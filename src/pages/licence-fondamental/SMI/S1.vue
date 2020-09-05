<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
import json from "@/data/data.json";
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMI-S1",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMI-S1 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Analyse 1",
			"Algebre 1",
			"Algebre 2",
			"Physique 1",
			"Physique 2",
			"Informatique 1",
			"Langue & terminologie 1",
		],
		slugs: [
			"analyse_1",
			"algebre_1",
			"algebre_2",
			"physique_1",
			"physique_2",
			"informatique_1",
			"langue_terminologie_1",
		],
		path: "/Licence Fondamental/S1/SMI/",
	}),
};
</script>
