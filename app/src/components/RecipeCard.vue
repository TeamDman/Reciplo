<template>
	<div v-if="recipe === undefined" class="recipe-card">
		Recipe error.
	</div>
	<div v-else class="recipe-card">
		<h2>{{ recipe.name }}</h2>
		<img
			v-if="recipe.thumbnailURL"
			width="100%"
			height="auto"
			:src="recipe.thumbnailURL"
		/>
	</div>
</template>

<script>
import Vue from "vue";
import { getRecipe } from "@/recipes.js";

export default Vue.extend({
	name: "app-recipe-card",
	props: ["id"],
	computed: {
		recipe() {
			return getRecipe(this.id);
		},
	},
});
</script>

<style scoped>
.recipe-card {
	width: 300px;
	color: black;
	text-decoration: none;
	margin: 10px;
	padding: 10px 5px;
	border-radius: 15px;
	box-shadow: rgba(78, 78, 78, 0.5) 3px 3px 10px;
}
.recipe-card:hover {
	color: red;
	box-shadow: rgba(17, 17, 17, 0.664) 3px 3px 15px;
	transition: color 0.3s, box-shadow 0.3s;
}
.recipe-link {
	color: black;
	text-decoration: none;
}
</style>
