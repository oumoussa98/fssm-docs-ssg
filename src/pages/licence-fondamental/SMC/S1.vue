<template>
	<S1 />
</template>
<script defer>
// to update this component update the component in this path  src/components/licence-fondamental/SMP/S1
import S1 from "@/pages/licence-fondamental/SMP/S1";
export default {
	metaInfo: () => ({
		title: "Licence Fondamental SMC-S1",
		meta: [
			{
				name: "description",
				content: "Licence Fondamental SMC-S1 courses",
			},
		],
	}),
	components: {
		S1,
	},
};
</script>
