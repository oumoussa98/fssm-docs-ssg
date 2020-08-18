<template>
	<v-container class="mt-10">
		<v-row class="text-center">
			<v-col>
				<LFCard />
			</v-col>
			<v-col>
				<LPCard />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import LFCard from "@/components/cards/LFCard";
import LPCard from "@/components/cards/LPCard";

export default {
	metaInfo: () => ({
		title: "Home Page",
		meta: [{ name: "description", content: "Landing page" }],
	}),
	components: {
		LFCard,
		LPCard,
	},
};
</script>
