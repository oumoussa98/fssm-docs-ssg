<template>
	<v-card raised class="card pt-6 pb-10">
		<h2>Licence Fondamental</h2>
		<v-container>
			<v-row>
				<v-col cols="4" offset="4">
					<v-btn @click="turnback" text v-if="i" color="blue">
						<v-icon dark left>mdi-arrow-left</v-icon>
					</v-btn>
				</v-col>
			</v-row>
			<v-btn
				v-for="(item, i) in items"
				:key="i"
				text
				outlined
				rounded
				class="ma-1 pa-6"
				@click="append(item)"
			>
				{{ item }}
			</v-btn>
		</v-container>
	</v-card>
</template>

<script defer>
export default {
	data: () => ({
		lfSemestres: ["S1", "S2", "S3", "S4", "S5", "S6"],
		items: ["S1", "S2", "S3", "S4", "S5", "S6"],
		lfFilieres: ["SMP", "SMC", "SVI", "STU", "SMI", "SMA"],
		SMP: [
			"Energetique",
			"Physique Moderne",
			"Electronique",
			"Physique de la Matiere Condensee",
			"Automatique",
		],
		SMC: [
			"Metallurgie",
			"Chimie des Materiaux",
			"Spectroscopie",
			"Chimie Biomoleculaire",
			"Metrologie et Qualite",
			"Heterocycle et Organometallique-Catalyse",
		],
		SVI: [
			"Biologie Appliquee Aux Production Vegetales",
			"Physiologie Animal",
			"Biologie Appliquee a la Gestion de Environnement",
			"Biologie de Conservation",
			"Eco-sante et Environnement",
		],
		STU: ["Bassins Sedimentaire et Georessources", "Geologie Appliquee"],
		semestre: "",
		filiere: "",
		option: "",
		path: "",
		i: 0,
	}),
	methods: {
		append(item) {
			if (this.i === 2) {
				this.option = item.replaceAll(" ", "-");
				this.$router.push({
					path: `Licence-Fondamental/${this.filiere}/${
						this.semestre
					}/${this.option}`,
				});
			}
			if (this.i === 0) {
				this.semestre = item;
				this.items = this.lfFilieres;
				this.i++;
			} else if (this.i === 1) {
				this.filiere = item;
				if (
					this.semestre === "S6" &&
					this.filiere !== "SMI" &&
					this.filiere !== "SMA"
				) {
					this.items = this[item];
					this.i++;
				} else {
					this.$router.push({
						path: `Licence-Fondamental/${this.filiere}/${
							this.semestre
						}`,
					});
				}
			}
		},
		turnback() {
			if (this.i === 1) {
				this.items = this.lfSemestres;
				this.i = 0;
			}
			if (this.i === 2) {
				this.items = this.lfFilieres;
				this.i--;
			}
		},
	},
};
</script>
