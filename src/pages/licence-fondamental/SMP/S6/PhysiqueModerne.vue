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
				content: "Licence Fondamental SMP-S6-Physique Moderne courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Physique quantique relativiste",
			"Relativite et formalisme tensoriel",
			"Optique Avancee",
			"Physique computationnelle",
		],
		slugs: [
			"physique_quantique_relativiste",
			"relativite_et_formalisme_tensoriel",
			"optique_avancee",
			"physique_computationnelle",
		],
		path: "/Licence Fondamental/S6/SMP/Physique Moderne",
	}),
};
</script>
