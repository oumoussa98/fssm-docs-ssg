<template>
	<S2 />
</template>

<script defer>
// to update this component update the component in this path  src/components/licence-fondamental/SMP/S2
import S2 from "@/pages/licence-fondamental/SMP/S2";
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMC-S2",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMC-S2 courses",
			},
		],
	}),
	components: {
		S2,
	},
};
</script>
