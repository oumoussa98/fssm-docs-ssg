<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMP-S5",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMP-S5 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Electronique analogique",
			"Mecanique analytique et vibration",
			"Physique nucleaire",
			"Physique des materiaux",
			"Physique quantique",
			"Physique statistique",
		],
		slugs: [
			"Electronique_analogique",
			"Mecanique_analytique_et_vibration",
			"Physique_nucleaire",
			"Physique_des_materiaux",
			"Physique_quantique",
			"Physique_statistique",
		],
		path: "/Licence Fondamental/S5/SMP/",
	}),
};
</script>
