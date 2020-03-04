<template>
	<div class="search-container">
		<input v-model="query" class="search-bar" placeholder="Search" />
	</div>
</template>

<script>
import Vue from "vue";
import { searchRecipes } from "@/recipes.js";
export default Vue.extend({
	name: "app-searchbox",
	props: ["value"],
	data() {
		return {
			query: "",
		};
	},
	watch: {
		query(text) {
			this.$emit("input", searchRecipes(text));
		},
	},
});
</script>

<style scoped>
.search-container {
	text-align: center;
	padding: 10%;
}
.search-bar {
	width: 60%;
	font-size: 25px;
}
</style>
