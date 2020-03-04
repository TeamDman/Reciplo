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
	text-align: center;
	padding-left: 5%;
	padding-right: 5%;
}

.recipe:nth-child(even) {
	background-color: rgba(62, 123, 143, 0.404);
}

.recipe {
	margin: 10px;
	padding: 10px 5px;
	border-radius: 15px;
	box-shadow: rgba(78, 78, 78, 0.5) 3px 3px 10px;
}
</style>
