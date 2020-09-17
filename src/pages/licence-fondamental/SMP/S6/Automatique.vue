<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMP-S6-Automatique",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMP-S6-Automatique courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Asservissement",
			"Automatismes et capteurs",
			"traitement du signal",
			"Syntheses des correcteur/Logique floue",
		],
		slugs: [
			"asservissement",
			"automatismes_et_capteurs",
			"traitement_du_signal",
			"syntheses_des_correcteur/Logique_floue",
		],
		path: "/Licence Fondamental/S6/SMP/Automatique",
	}),
};
</script>
