<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMC-S3",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMC-S3 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Chimie organique generale",
			"Cristallographie Geometrique et cristallochimie 1",
			"Chimie des electrolytes",
			"Chimie Experimentale (TP)",
			"Electromagnetisme",
			"Informatique",
		],
		slugs: [
			"chimie_organique_generale",
			"cristallographie_geometrique_et_cristallochimie_1",
			"chimie_des_electrolytes",
			"chimie_experimentale",
			"electromagnetisme",
			"enformatique",
		],
		path: "/Licence Fondamental/S3/SMC/",
	}),
};
</script>
