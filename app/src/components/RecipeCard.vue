<template>
	<div v-if="recipe === undefined" class="recipe-card">
		Recipe error.
	</div>
	<div v-else class="recipe-card">
		<h1>{{ recipe.name }}</h1>
		<img
			v-if="recipe.thumbnailURL"
			width="100"
			height="100"
			:src="recipe.thumbnailURL"
		/>
		<!-- <span>{{ recipe.id }} is yum</span> -->
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
}
.recipe-link {
	text-decoration: none;
	color: black;
}
</style>
