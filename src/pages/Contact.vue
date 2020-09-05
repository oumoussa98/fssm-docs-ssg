<template>
	<v-container class="mt-10">
		<v-form
			netlify
			name="contact"
			method="POST"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			v-on:submit.prevent="handleSubmit"
			ref="form"
			v-model="valid"
			lazy-validation
		>
			<input type="hidden" name="form-name" value="contact" />
			<p hidden>
				<label>
					Don’t fill this out:
					<input name="bot-field" />
				</label>
			</p>
			<v-text-field
				name="name"
				v-model="formData.name"
				:counter="30"
				:rules="nameRules"
				label="Name"
				filled
				required
				prepend-inner-icon="mdi-account"
			></v-text-field>
			<v-text-field
				name="email"
				v-model="formData.email"
				:rules="emailRules"
				filled
				label="Email address"
				type="email"
				required
				prepend-inner-icon="mdi-email"
			></v-text-field>
			<v-text-field
				name="phone"
				v-model="formData.phone"
				filled
				label="Phone number (Optional)"
				prepend-inner-icon="mdi-phone"
			></v-text-field>
			<v-textarea
				name="message"
				v-model="formData.message"
				:rules="messageRules"
				auto-grow
				filled
				label="Message"
				rows="1"
				prepend-inner-icon="mdi-message"
				required
			></v-textarea>
			<v-btn
				:disabled="!valid"
				color="success"
				class="mr-8 px-8"
				@click="validate"
				type="submit"
			>
				Send
			</v-btn>
		</v-form>
		<v-dialog v-if="successMessage" v-model="dialog" max-width="500px">
			<v-card class="pa-4">
				<v-card-title class="success--text">
					<v-icon class="pr-4" color="success">
						mdi-check
					</v-icon>
					submited successfully
					<br />
					Thanks for contacting us :)
					<v-spacer></v-spacer>
					<v-btn color="primary" @click="dialog = false">
						CLOSE
					</v-btn>
				</v-card-title>
			</v-card>
		</v-dialog>
		<v-dialog
			class="text-wrap"
			v-if="errorMessage"
			v-model="dialog"
			max-width="500px"
		>
			<v-card class="pa-4 text-wrap">
				<v-card-title class="text-wrap red--text">
					{{ errorMessage }}
					<v-spacer></v-spacer>
				</v-card-title>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script defer>
export default {
	metaInfo: () => ({
		title: "Contact",
		meta: [
			{ name: "description", content: "Contact us for additional info" },
		],
	}),
	data: () => ({
		valid: true,
		errorMessage: false,
		successMessage: false,
		dialog: true,
		formData: {},
		nameRules: [
			(v) => !!v || "Name is required",
			(v) =>
				(v && v.length <= 30) || "Name must be less than 30 characters",
		],
		messageRules: [(v) => !!v || "message is required"],
		emailRules: [
			(v) => !!v || "E-mail is required",
			(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
		],
	}),
	// Methods =============
	methods: {
		validate() {
			this.$refs.form.validate();
			this.dialog = true;
		},
		Submited() {
			Object.keys(this.formData).forEach((k) => delete this.formData[k]);
			this.reset();
			this.successMessage = true;
		},
		encode(data) {
			return Object.keys(data)
				.map(
					(key) =>
						encodeURIComponent(key) +
						"=" +
						encodeURIComponent(data[key])
				)
				.join("&");
		},
		handleSubmit(e) {
			let vm = this;
			fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: this.encode({
					"form-name": e.target.getAttribute("name"),
					...vm.formData,
				}),
			})
				.then(() => this.Submited())
				.catch((error) => {
					this.errorMessage =
						"Something went wrong!! please try again";
					console.log(error);
				});
		},
	},
};
</script>
