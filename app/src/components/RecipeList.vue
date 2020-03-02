<template>
	<div class="container">
		<template v-for="(v, i) of ids">
			<RecipeCard class="recipe" :key="i" :id="v" />
		</template>
	</div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
	name: "app-recipe-list",
	props: ["ids"],
	components: {
		RecipeCard: () => import("@/components/RecipeCard.vue"),
	},
});
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: row;
}

.recipe:nth-child(even) {
	background-color: gray;
}
</style>
