<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SVI-S6-Physiologie-Animal",
		meta: [
			{
				name: "description",
				content:
					"Licence Fondamental SVI-S6-Physiologie-Animal courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Neuroanatomie et Organes des sens",
			"Endocrinologie",
			"Ethologie et psychophysiologie",
			"Pharmacologie et mecanismes dinteractions",
		],
		slugs: [
			"Neuroanatomie_et_Organes_des_sens",
			"Endocrinologie",
			"Ethologie_et_psychophysiologie",
			"Pharmacologie_et_mecanismes_dinteractions",
		],
		path: "/Licence Fondamental/S6/SVI/Physiologie Animal",
	}),
};
</script>
