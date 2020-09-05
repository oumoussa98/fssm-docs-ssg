<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental STU-S2",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental STU-S2 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Biologie des organismes animaux",
			"Biologie des organismes vegetaux",
			"Geodynamique externe",
			"Geodynamique interne",
			"Physique II",
			"Chimie Organique II",
			"Langue et Terminologie II",
		],
		slugs: [
			"biologie_des_organismes_animaux",
			"biologie_des_organismes_vegetaux",
			"geodynamique_externe",
			"geodynamique_interne",
			"physique_II",
			"chimie_organique_II",
			"langue_et_terminologie_II",
		],
		path: "/Licence Fondamental/S2/STU/",
	}),
};
</script>
