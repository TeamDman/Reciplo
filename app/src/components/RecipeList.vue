<template>
	<div class="container">
		<template v-for="(v, i) of ids">
			<router-link
				:key="i"
				class="recipe-link"
				:to="{ name: 'Recipe', params: { id: v } }"
			>
				<RecipeCard class="recipe" :id="v" />
			</router-link>
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
	flex-wrap: wrap;
}

.recipe:nth-child(even) {
	background-color: rgba(62, 123, 143, 0.404);
}

.recipe {
	margin: 10px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.5) 10px 10px;
}
</style>
