<template>
	<div class="container">
		<template v-for="(v, i) of ids">
			<router-link
				:key="i"
				class="recipe-link"
				:to="{ name: 'Recipe', params: { id: v } }"
			>
				<RecipeCard :id="v" />
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
a {
	text-decoration: none;
}
</style>
