<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMP-S1",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMP-S1 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Mecanique du point",
			"Thermodynamique 1",
			"Atomistique",
			"Thermochimie",
			"Analyse 1",
			"Algebre 1",
			"Langue & terminologie 1",
		],
		slugs: [
			"mecanique_du_point",
			"thermodynamique",
			"atomistique",
			"thermochimie",
			"analyse",
			"algebre",
			"langue_terminologie",
		],
		path: "/Licence Fondamental/S1/SMP/",
	}),
};
</script>
