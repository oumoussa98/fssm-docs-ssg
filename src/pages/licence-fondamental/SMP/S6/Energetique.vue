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
				content: "Licence Fondamental SMP-S6-Energetique courses",
			},
		],
	}),
	// Data =================
	data: () => ({
		smodules: [
			"Mecanique de Fluide",
			"Mecanique des milieux continus",
			"Transferts Thermiques",
			"Methodes Numerique",
		],
		slugs: [
			"mecanique_de_fluide",
			"mecanique_des_milieux_continus",
			"transferts_thermiques",
			"methodes_numerique",
		],
		path: "/Licence Fondamental/S6/SMP/Energetique",
	}),
};
</script>
