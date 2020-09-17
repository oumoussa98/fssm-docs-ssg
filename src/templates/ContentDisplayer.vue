<template>
	<v-container
		:class="{ 'd-flex justify-center': succeed.state, 'mt-10': true }"
		fluid
	>
		<v-card raised>
			<v-tabs
				v-model="active_tab"
				color="blue darken-1"
				center-active
				:background-color="bgColor()"
				:vertical="screenWidth < 1100 && screenWidth >= 780"
				:show-arrows="screenWidth >= 1100"
			>
				<v-tabs-slider v-if="screenWidth < 780" :color="bgColor()">
				</v-tabs-slider>
				<!------------------ for small devices ------------------------>
				<div class="text-center">
					<v-menu
						v-if="screenWidth < 780"
						bottom
						offset-y
						class="text-no-wrap"
						transition="slide-y-transition"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								class="tab-button"
								text
								v-bind="attrs"
								v-on="on"
							>
								<span>
									{{ currentModule }}
								</span>
								<v-icon right>mdi-menu-down</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								v-for="(smodule, i) in smodules"
								:key="i"
							>
								<v-tab
									class="tab-item"
									@click="changeCurrentModule(smodule)"
								>
									{{ smodule }}
								</v-tab>
							</v-list-item>
						</v-list>
					</v-menu>
				</div>
				<!------------------ for medium and large devices ------------------------>
				<template v-if="screenWidth >= 780">
					<v-tab
						class="py-6 pa-8"
						v-for="(smodule, i) in smodules"
						:key="i"
					>
						{{ smodule }}
					</v-tab>
				</template>

				<v-tab-item
					:style="inlineStyle()"
					class="ml-1"
					v-for="(dta, i) in data"
					:key="i"
				>
					<span class="progress" v-show="!succeed.state">
						<v-progress-circular
							indeterminate
							color="primary"
						></v-progress-circular>
					</span>

					<v-treeview
						class="pt-4 text-no-wrap"
						v-show="succeed.state"
						v-model="tree"
						:open="open"
						:items="dta"
						activatable
						item-key="name"
						open-on-click
					>
						<template
							class="text-no-wrap"
							v-slot:prepend="{ item, open }"
						>
							<v-icon
								color="#fcad03"
								v-if="!item.file && !isEmpty(item)"
							>
								{{ open ? "mdi-folder-open" : "mdi-folder" }}
							</v-icon>
							<img
								v-if="isEmpty(item)"
								width="25"
								src="@/assets/images/empty-folder.svg"
							/>
							<v-btn
								fab
								small
								dark
								text
								color="success"
								v-if="item.file"
								@click="download(item.href)"
								class="px-0 mx-0"
							>
								<v-icon>
									mdi-download
								</v-icon>
							</v-btn>
							<v-btn fab small text v-if="item.file">
								<v-icon>
									{{ files[item.file] }}
								</v-icon>
							</v-btn>
						</template>
					</v-treeview>
				</v-tab-item>
			</v-tabs>
		</v-card>
	</v-container>
</template>

<script defer>
import dataGetter from "@/data/DataGetter.js";
export default {
	// props =================
	props: {
		smodules: Array,
		slugs: Array,
		path: String,
	},
	// Data =================
	data: function() {
		return {
			succeed: null,
			mobileView: false,
			dialog: false,
			currentModule: this.smodules[0],
			screenWidth: null,
			active_tab: 0,

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
		};
	},
	// methods ===============
	methods: {
		inlineStyle() {
			if (this.screenWidth < 700) {
				return "width:auto; overflow-x: auto; white-space: nowrap;";
			}
			return false;
		},
		changeCurrentModule(smodule) {
			this.currentModule = smodule;
			this.active_tab = null;
		},
		bgColor() {
			if (this.$vuetify.theme.dark) {
				return "black";
			}
			return "grey lighten-4";
		},
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
		this.succeed = dataGetter.succeed;
		dataGetter.getAllData(this.smodules, this.path, this.slugs);
		this.data = dataGetter.data;
	},
	mounted() {
		this.screenWidth = window.innerWidth;
		window.addEventListener("resize", () => {
			this.screenWidth = window.innerWidth;
		});
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
.v-window {
	overflow-x: auto;
}
.v-treeview {
	min-width: 40em;
}
.v-tab {
	white-space: initial;
}
@media only screen and (max-width: 445px) {
	.tab-button {
		font-size: 10px;
		font-size: 10px !important;
	}
}
@media only screen and (max-width: 780px) {
	.tab-button {
		display: block;
		white-space: initial;
		width: 66vw;
		margin: 2% 0 0 20%;
		border-bottom: 1px solid #0077ff;
	}
	.tab-item {
		width: 100%;
		padding: 15px 20px;
		margin: auto;
	}
}
</style>
