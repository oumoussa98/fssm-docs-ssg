import Vuetify from "vuetify";
import "./assets/style/index.scss";
import DefaultLayout from "@/layouts/Default.vue";
import firebase from "firebase/app";

export default function(Vue, { router, appOptions, head, isClient }) {
	head.link.push({
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/icon?family=Material+Icons",
	});
	head.link.push({
		rel: "stylesheet",
		href:
			"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
	});
	// Add a meta tag
	head.meta.push({
		name: "keywords",
		content:
			"Licence Fondamental, FSSM, SMPC, SMP, SMC, SVTU, SVI, STU, SMIA, SMI, SMA, Biologie, Chimie, Geologie, Informatique, Physique, Mathématiques, Faculte, Sciences, Semlalia",
	});
	const opts = {
		theme: {
			dark: false,
		},
		icons: {
			iconfont: "mdi",
		},
	};
	Vue.use(Vuetify);
	appOptions.vuetify = new Vuetify(opts);
	Vue.component("ContentDisplayer", () =>
		import("@/templates/ContentDisplayer")
	);
	Vue.component("Layout", DefaultLayout);
}
firebase.initializeApp({
	apiKey: "AIzaSyBpjbXVMUKHx77navIKO8IChlql94oFJmQ",
	authDomain: "fssm-fb8e7.firebaseapp.com",
	projectId: "fssm-fb8e7",
	storageBucket: "fssm-fb8e7.appspot.com",
});
