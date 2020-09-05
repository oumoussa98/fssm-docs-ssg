<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMP-S6",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMP-S6-Electronique courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Systeme numerique",
			"electronique non lineaire et instrumentation",
			"Telecommunications",
			"Automatique",
		],
		slugs: [
			"systeme_numerique",
			"electronique_non_lineaire_et_instrumentation",
			"telecommunications",
			"automatique",
		],
		path: "/Licence Fondamental/S6/SMP/Electronique",
	}),
};
</script>
