<template>
	<div v-if="recipe === undefined" class="recipe-card">
		Recipe error.
	</div>
	<div v-else class="recipe-card">
		<router-link class="recipe-link" :to="{ name: 'Recipe', params: { id } }"
			><h1>{{ recipe.name }}</h1></router-link
		>
		<span>{{ recipe.id }} is yum</span>
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
