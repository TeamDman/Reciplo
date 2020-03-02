<template>
	<div>Search <input v-model="query" /></div>
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
