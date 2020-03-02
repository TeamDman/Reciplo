<template>
	<div>
		<Searchbar v-model="ids" />
		<RecipeList :ids="ids" />
	</div>
</template>

<script>
import { getAllRecipes } from "@/recipes.js";
export default {
	name: "Home",
	components: {
		Searchbar: () => import("@/components/Searchbar.vue"),
		RecipeList: () => import("@/components/RecipeList.vue"),
	},
	data() {
		return {
			ids: getAllRecipes(),
		};
	},
};
</script>
