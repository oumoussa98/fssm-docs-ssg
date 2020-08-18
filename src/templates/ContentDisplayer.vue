<template>
	<v-container class="mt-6 d-flex justify-center" fluid>
		<v-card raised>
			<v-tabs v-model="tab" show-arrows height="70px">
				<v-tabs-slider color="teal lighten-3"></v-tabs-slider>
				<v-tab v-for="(smodule, i) in smodules" :key="i">
					{{ smodule }}
				</v-tab>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item v-for="(dta, i) in data" :key="i">
					<v-card flat>
						<span class="progress" v-show="!succeed.state">
							<v-progress-circular
								indeterminate
								color="primary"
							></v-progress-circular>
						</span>

						<v-treeview
							v-show="succeed.state"
							v-model="tree"
							:open="open"
							:items="dta"
							activatable
							item-key="name"
							open-on-click
						>
							<template v-slot:prepend="{ item, open }">
								<v-icon
									color="#fcad03"
									v-if="!item.file && !isEmpty(item)"
								>
									{{
										open ? "mdi-folder-open" : "mdi-folder"
									}}
								</v-icon>
								<img
									v-if="isEmpty(item)"
									width="25"
									src="@/assets/images/empty-folder.svg"
								/>
								<v-tooltip bottom>
									<template v-slot:activator="{ on, attrs }">
										<v-btn
											fab
											small
											dark
											text
											color="success"
											v-if="item.file"
											@click="download(item.href)"
											v-bind="attrs"
											v-on="on"
											class="px-0 mx-0"
										>
											<v-icon>
												mdi-download
											</v-icon>
										</v-btn>
									</template>
									<span>Download</span>
								</v-tooltip>
								<v-btn fab small text v-if="item.file">
									<v-icon>
										{{ files[item.file] }}
									</v-icon>
								</v-btn>
							</template>
						</v-treeview>
					</v-card>
				</v-tab-item>
			</v-tabs-items>
		</v-card>
	</v-container>
</template>

<script>
import dataGetter from "@/data/DataGetter.js";
export default {
	// props =================
	props: {
		smodules: Array,
		slugs: Array,
		path: String,
	},
	// Data =================
	data: () => ({
		tab: null,
		succeed: null,
		// treeview
		open: ["public"],
		files: {
			pdf: "mdi-file-pdf",
			txt: "mdi-file-document-outline",
			xls: "mdi-file-excel",
			docx: "mdi-file-word",
			jpg: "mdi-file-image",
			jpeg: "mdi-file-image",
			png: "mdi-file-image",
			html: "mdi-language-html5",
		},
		tree: [],
		data: {},
	}),

	// methods ===============
	methods: {
		isEmpty: (item) => {
			if (!item.file && item.children.length === 0) return true;
			return false;
		},
		download(item) {
			let w = "800";
			let h = "500";
			// Fixes dual-screen position
			let dualScreenLeft =
				window.screenLeft != undefined
					? window.screenLeft
					: screen.left;
			let dualScreenTop =
				window.screenTop != undefined ? window.screenTop : screen.top;

			let width = window.innerWidth
				? window.innerWidth
				: document.documentElement.clientWidth
				? document.documentElement.clientWidth
				: screen.width;
			let height = window.innerHeight
				? window.innerHeight
				: document.documentElement.clientHeight
				? document.documentElement.clientHeight
				: screen.height;

			let left = width / 2 - w / 2 + dualScreenLeft;
			let top = height / 2 - h / 2 + dualScreenTop;
			let newWindow = window.open(
				item,
				"download",
				"scrollbars=yes, width=" +
					w +
					", height=" +
					h +
					", top=" +
					top +
					", left=" +
					left
			);
			newWindow.focus();
			newWindow.onblur = () => {
				newWindow.close();
			};
		},
	},
	// lifecycle hooks ============

	created() {
		dataGetter.getAllData(this.smodules, this.path, this.slugs);
		this.data = dataGetter.data;
		this.succeed = dataGetter.succeed;
	},
};
</script>
<style>
.progress {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 30px;
}
</style>
