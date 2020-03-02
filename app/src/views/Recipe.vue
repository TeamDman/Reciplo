<template>
	<div v-if="recipe === undefined">
		Recipe not found.
	</div>
	<div v-else>
		<h1>{{ recipe.name }}</h1>
	</div>
</template>

<script>
import Vue from "vue";
import { getRecipe } from "@/recipes.js";

export default Vue.extend({
	name: "app-recipe-details",
	data() {
		return {
			recipe: getRecipe(this.$route.params.id),
		};
	},
	watch: {
		$route(to) {
			this.recipe = getRecipe(to.params.id);
		},
	},
});
</script>
