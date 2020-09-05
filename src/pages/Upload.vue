<template>
	<v-container>
		<v-row>
			<v-col cols="10" offset="1" class="pt-10">
				<form @submit.prevent="uploadFile">
					<v-select
						v-model="level"
						:items="levels"
						label="Level"
					></v-select>
					<v-select
						v-if="level === 'Licence Professionelle'"
						v-model="lpFiliere"
						:items="lpFilieres"
						label="Filieres"
					></v-select>
					<v-select
						v-if="level === 'Licence Fondamental'"
						v-model="filiere"
						:items="lfFilieres"
						label="Filiere"
					></v-select>
					<v-select
						v-if="level === 'Licence Fondamental'"
						v-model="semestre"
						:items="lfsemestres"
						label="Semestre"
					></v-select>
					<v-select
						v-if="
							level === 'Licence Fondamental' && semestre === 'S6'
						"
						v-model="option"
						:items="s6Options"
						label="Option"
					></v-select>
					<v-select
						v-if="level === 'Licence Professionelle'"
						v-model="semestre"
						:items="lpsemestres"
						label="Semestre"
					></v-select>
					<v-select
						v-if="
							level === 'Licence Fondamental' &&
								semestre !== '' &&
								filiere !== ''
						"
						v-model="Smodule"
						:items="lfModules"
						label="Module"
					></v-select>
					<v-select
						v-model="type"
						:items="types"
						label="Type"
					></v-select>

					<v-file-input
						v-model="files"
						counter
						placeholder="Upload your documents"
						label="File input"
						multiple
						prepend-icon="mdi-paperclip"
						:show-size="1000"
						class="mt-10"
					>
						<template v-slot:selection="{ text }">
							<v-chip small label color="primary">
								{{ text }}
							</v-chip>
						</template>
					</v-file-input>
					<span class="pl-8 red--text float-right" v-if="error">
						It looks like you're trying to upload an invalid file
						type !!
					</span>

					<v-btn
						class="mr-10 mt-10 px-4 py-4"
						color="#08bb4c"
						type="submit"
						dark
					>
						Upload File(s)
						<v-icon class="px-4" right dark
							>mdi-cloud-upload</v-icon
						>
					</v-btn>

					<v-dialog v-model="dialog" persistent max-width="500px">
						<v-card class="pa-4">
							<v-card-text>
								<v-progress-linear
									class="mt-6"
									v-model="uploadProgress"
									height="20"
									rounded
									color="light-blue lighten-1"
								>
									<strong
										>{{
											Math.ceil(uploadProgress)
										}}%</strong
									>
								</v-progress-linear>
							</v-card-text>
							<v-card-title
								v-if="uploadProgress === 100"
								class="success--text"
							>
								<v-icon class="pr-4" color="success">
									mdi-check
								</v-icon>
								File(s) uploaded successfully
								<v-spacer></v-spacer>
								<v-btn color="primary" @click="dialog = false">
									CLOSE
								</v-btn>
							</v-card-title>
						</v-card>
					</v-dialog>
				</form>
			</v-col>
		</v-row>
		{{ getModules() }}
	</v-container>
</template>

<script defer>
import json from "@/data/data.json";
import firebase from "firebase/app";
import "firebase/storage";

export default {
	metaInfo: () => ({
		title: "Files Upload",
		meta: [{ name: "description", content: "uploading your files" }],
	}),
	data: () => ({
		// v-select data
		types: json.types,
		levels: json.levels,
		lpFilieres: json.lpFilieres,
		lfsemestres: json.lfsemestres,
		lpsemestres: json.lpsemestres,
		lfFilieres: json.lfFilieres,
		s6Options: [],
		lfModules: [],
		// models
		files: [],
		level: "",
		semestre: "",
		option: "",
		filiere: "",
		Smodule: "",
		lpFiliere: "",
		uploadProgress: null,
		dialog: false,
		error: false,
		type: "",
	}),
	methods: {
		uploadFile() {
			if (!this.validate()) {
				throw new Error(
					"Invalid File, you can not upload this kind of files"
				);
			}
			let vm = this;
			let uploadTask;
			vm.files.forEach((file) => {
				uploadTask = firebase
					.storage()
					.ref(
						`${this.level}/${this.semestre}/${this.filiere}/${
							this.option
						}/${this.Smodule}/${this.type}/${file.name}`
					)
					.put(file);
			});
			uploadTask.on("state_changed", function(snapshot) {
				vm.dialog = true;
				vm.uploadProgress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				if (vm.uploadProgress === 100) {
					vm.files = [];
				}
			});
		},
		validate() {
			if (
				this.level === "" ||
				this.filiere === "" ||
				this.semestre === "" ||
				this.Smodule === "" ||
				this.type === ""
			) {
				return false;
			}
			for (let i = 0; i < this.files.length; i++) {
				if (
					this.files[i].name.slice(
						this.files[i].name.lastIndexOf(".") + 1
					) === "pdf" ||
					this.files[i].name.slice(
						this.files[i].name.lastIndexOf(".") + 1
					) === "txt" ||
					this.files[i].name.slice(
						this.files[i].name.lastIndexOf(".") + 1
					) === "xls" ||
					this.files[i].name.slice(
						this.files[i].name.lastIndexOf(".") + 1
					) === "docx" ||
					this.files[i].name.slice(
						this.files[i].name.lastIndexOf(".") + 1
					) === "jpg" ||
					this.files[i].name.slice(
						this.files[i].name.lastIndexOf(".") + 1
					) === "jpeg" ||
					this.files[i].name.slice(
						this.files[i].name.lastIndexOf(".") + 1
					) === "png" ||
					this.files[i].name.slice(
						this.files[i].name.lastIndexOf(".") + 1
					) === "html"
				) {
					return true;
				} else {
					this.error = true;
					return false;
				}
			}
		},
		getModules() {
			// licence fondamental
			if (
				this.level === "Licence Fondamental" &&
				this.filiere !== "" &&
				this.semestre !== ""
			) {
				switch (this.semestre) {
					case "S6":
						this.s6Options =
							json.lfmodules[this.filiere][this.semestre][
								"options"
							];
						if (this.option) {
							this.lfModules =
								json.lfmodules[this.filiere][this.semestre][
									this.option
								];
						}
						break;
					case "S1":
					case "S2":
					case "S3":
					case "S4":
					case "S5":
						this.lfModules =
							json.lfmodules[this.filiere][this.semestre];
						break;
					default:
						throw new TypeError("Invalid semestre");
				}
			}
		},
	},
};
</script>
<style>
span {
	display: block;
}
</style>
