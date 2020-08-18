<template>
	<v-card raised class="card pt-6 pb-10">
		<h2>Licence Fondamental</h2>
		<form>
			<v-container class="px-8">
				<v-select
					v-model="semestre"
					:items="lfSemestres"
					label="Semestre"
				></v-select>
				<v-select
					v-model="filiere"
					:items="lfFilieres"
					label="Filieres"
				></v-select>
			</v-container>

			<v-btn
				fab
				color="primary"
				origin="center center"
				:to="path"
				:disabled="checkPath()"
			>
				Go
			</v-btn>
		</form>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		lfSemestres: ["S1", "S2", "S3", "S4", "S5"],
		lfFilieres: ["SMP", "SMC"],
		semestre: "",
		filiere: "",
		path: "",
	}),
	methods: {
		checkPath() {
			if (this.semestre !== "" && this.filiere !== "") {
				this.path = `licence-fondamental/${this.filiere}/${this.semestre}`;
				return false;
			}
			return true;
		},
	},
};
</script>

<style>
.card {
	min-height: 57vh !important;
}
</style>
