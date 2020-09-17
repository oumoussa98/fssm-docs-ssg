<template>
	<ContentDisplayer :smodules="smodules" :slugs="slugs" :path="path">
	</ContentDisplayer>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMA-S6",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMA-S6 courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Calcule Differentiel",
			"Integration 2",
			"Toplogie 2",
			"Algebre 7",
			"Probabilites",
			"Equations Defferentielles et applications",
		],
		slugs: [
			"calcule_differentiel",
			"integration_2",
			"toplogie_2",
			"algebre_7",
			"probabilites",
			"equations_defferentielles_et_applications",
		],
		path: "/Licence Fondamental/S6/SMA/",
	}),
};
</script>
