<template>
	<v-card raised class="card pt-6 pb-10">
		<h2>Licence Professionelle</h2>

		<!-- <v-btn
			@click="$emit('turnback', shortcut)"
			text
			v-if="back"
			color="blue"
		>
			<v-icon dark left>mdi-arrow-left</v-icon>
		</v-btn> -->

		<div class="px-2 pt-10">
			<v-row>
				<v-col><p class="red--text text-center">Coming soon</p></v-col>
			</v-row>
			<v-tooltip bottom v-for="(item, i) in items" :key="i">
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						text
						outlined
						rounded
						v-bind="attrs"
						v-on="on"
						class="ma-1 pa-6"
						>{{ item.name }}
					</v-btn>
				</template>
				<span>{{ item.tooltip }}</span>
			</v-tooltip>
		</div>
	</v-card>
</template>

<script defer>
export default {
	data: () => ({
		items: [
			{ name: "LP-OO", tooltip: "Optique Optométrie" },
			{
				name: "LP-3ER",
				tooltip: "Efficacité Énergétique et Énergies Renouvelables",
			},
			{
				name: "LP-TCBTP",
				tooltip:
					"Technologie et Coordination dans le Bâtiment & les Travaux Publics",
			},
			{
				name: "LP-STADLS",
				tooltip:
					"Sciences et Techniques de l’Assainissement des Déchets Liquides et Solides",
			},
			{ name: "LP-CV", tooltip: "Céramiques et Verres" },
			{ name: "LP-ACQ", tooltip: "Analyse Chimique et Qualité" },
			{
				name: "LP-R2MV",
				tooltip: "Ressources Minières Marocaines et Valorisation",
			},
			{
				name: "LP-R2SI",
				tooltip: "Réseaux et Sécurité des Systèmes Informatiques",
			},
			{ name: "LP-TPW", tooltip: "Technologies et Programmation Web" },
			{ name: "LP-GRN", tooltip: "Géo-environnement & Risques Naturels" },
			{
				name: "LP-EOES",
				tooltip: "Electronics Optics for Empedded Systemes",
			},
		],
	}),
};
</script>

<style>
.card {
	min-height: 57vh !important;
}
</style>
