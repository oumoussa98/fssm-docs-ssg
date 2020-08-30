import * as firebase from "firebase/app";
import "firebase/storage";

export default {
	data: {},
	succeed: {
		state: false,
	},
	setData(smodules) {
		this.data = {};
		this.succeed.state = false;
		smodules.forEach((key) => {
			this.data[key] = [
				{
					name: "Cours",
					children: [],
				},
				{
					name: "Travaux diriges (TD)",
					children: [],
				},
				{
					name: "Travaux pratiques (TP)",
					children: [],
				},
				{
					name: "Controles",
					children: [],
				},
				{
					name: "Exercices",
					children: [],
				},
			];
		});
	},

	async getdata(smodule, key, path) {
		let vm = this;
		let storageRef = firebase.storage().ref();
		let listRef = storageRef.child(path);
		// Find all the prefixes and items
		await listRef
			.listAll()
			.then((res) => {
				res.prefixes.forEach((folderRef) => {
					switch (folderRef.name) {
						case smodule:
							listRef = storageRef.child(folderRef.fullPath);
							listRef
								.listAll()
								.then((res) => {
									res.prefixes.forEach((folderRef) => {
										switch (folderRef.name) {
											case "Cours":
												listRef = storageRef.child(
													folderRef.fullPath
												);
												listRef
													.listAll()
													.then((res) => {
														res.items.forEach(
															(itemRef) => {
																let obj = {};
																obj.name =
																	itemRef.name;
																obj.file = itemRef.name.slice(
																	itemRef.name.lastIndexOf(
																		"."
																	) + 1
																);
																storageRef
																	.child(
																		itemRef.fullPath
																	)
																	.getDownloadURL()
																	.then(
																		(
																			url
																		) => {
																			obj.href = url;
																		}
																	);
																vm.data[
																	key
																][0].children.push(
																	obj
																);
															}
														);
													})
													.catch((error) =>
														console.log(error)
													);
												break;
											case "Travaux diriges (TD)":
												listRef = storageRef.child(
													folderRef.fullPath
												);
												listRef
													.listAll()
													.then((res) => {
														res.items.forEach(
															(itemRef) => {
																let obj = {};
																obj.name =
																	itemRef.name;
																obj.file = itemRef.name.slice(
																	itemRef.name.lastIndexOf(
																		"."
																	) + 1
																);
																storageRef
																	.child(
																		itemRef.fullPath
																	)
																	.getDownloadURL()
																	.then(
																		(
																			url
																		) => {
																			obj.href = url;
																		}
																	);
																vm.data[
																	key
																][1].children.push(
																	obj
																);
															}
														);
													})
													.catch((error) =>
														console.log(error)
													);
												break;
											case "Travaux pratiques (TP)":
												listRef = storageRef.child(
													folderRef.fullPath
												);
												listRef
													.listAll()
													.then((res) => {
														res.items.forEach(
															(itemRef) => {
																let obj = {};
																obj.name =
																	itemRef.name;
																obj.file = itemRef.name.slice(
																	itemRef.name.lastIndexOf(
																		"."
																	) + 1
																);
																storageRef
																	.child(
																		itemRef.fullPath
																	)
																	.getDownloadURL()
																	.then(
																		(
																			url
																		) => {
																			obj.href = url;
																		}
																	);
																vm.data[
																	key
																][2].children.push(
																	obj
																);
															}
														);
													})
													.catch((error) =>
														console.log(error)
													);
												break;
											case "Controles":
												listRef = storageRef.child(
													folderRef.fullPath
												);
												listRef
													.listAll()
													.then((res) => {
														res.items.forEach(
															(itemRef) => {
																let obj = {};
																obj.name =
																	itemRef.name;
																obj.file = itemRef.name.slice(
																	itemRef.name.lastIndexOf(
																		"."
																	) + 1
																);
																storageRef
																	.child(
																		itemRef.fullPath
																	)
																	.getDownloadURL()
																	.then(
																		(
																			url
																		) => {
																			obj.href = url;
																		}
																	);
																vm.data[
																	key
																][3].children.push(
																	obj
																);
															}
														);
													})
													.catch((error) =>
														console.log(error)
													);
												break;
											case "Exercices":
												listRef = storageRef.child(
													folderRef.fullPath
												);
												listRef
													.listAll()
													.then((res) => {
														res.items.forEach(
															(itemRef) => {
																let obj = {};
																obj.name =
																	itemRef.name;
																obj.file = itemRef.name.slice(
																	itemRef.name.lastIndexOf(
																		"."
																	) + 1
																);
																storageRef
																	.child(
																		itemRef.fullPath
																	)
																	.getDownloadURL()
																	.then(
																		(
																			url
																		) => {
																			obj.href = url;
																		}
																	);
																vm.data[
																	key
																][4].children.push(
																	obj
																);
															}
														);
													})
													.catch((error) =>
														console.log(error)
													);
										}
									});
								})
								.catch((error) => console.log(error));
					}
				});
			})
			.catch((error) => {
				console.log(error);
				vm.succeed.state = false;
			});
	},
	async getAllData(smodules, path, slugs) {
		let vm = this;
		vm.setData(slugs);
		let keys = [];
		Object.keys(vm.data).forEach((key) => {
			keys.push(key);
		});

		for (let i = 0; i < smodules.length; i++) {
			await vm.getdata(smodules[i], keys[i], path);
		}
		vm.succeed.state = true;
	},
};
