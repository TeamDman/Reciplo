<template>
	<div v-if="recipe === undefined">
		Recipe not found.
	</div>
	<main v-else id="content">
		<div>
			<h1>{{ recipe.name }}</h1>
			<em>by {{ recipe.author }}</em>
			<br />
			<strong>Prep time: </strong>{{ recipe.time }}
			<br />
			<strong>Serves: </strong>{{ recipe.serves }}
		</div>
		<div>
			<h2>Ingredients</h2>
			<ol style="padding-left: 0;">
				<template v-for="v of recipe.ingredients">
					<ul class="recipe-ingredient">
						-
						{{
							v
						}}
					</ul>
				</template>
			</ol>
		</div>
		<div>
			<h2>Instructions</h2>
			<ol>
				<template v-for="(v, i) of recipe.instructions">
					<li
						:key="i"
						:class="{ selected: i === activeInstruction }"
						@click="onInstructionClick(i)"
						class="recipe-instruction"
					>
						{{ v }}
					</li>
				</template>
			</ol>
		</div>
	</main>
</template>

<script>
import Vue from "vue";
import { getRecipe } from "@/recipes.js";

export default Vue.extend({
	name: "app-recipe-details",
	data() {
		return {
			recipe: getRecipe(this.$route.params.id),
			activeInstruction: 0,
		};
	},
	watch: {
		$route(to) {
			this.recipe = getRecipe(to.params.id);
		},
	},
	methods: {
		onInstructionClick(index) {
			this.activeInstruction = index;
			this.read(this.recipe.instructions[index]);
		},
		read(text) {
			const msg = new SpeechSynthesisUtterance(text);
			window.speechSynthesis.speak(msg);
		},
	},
});
</script>

<style scoped>
#content {
	width: 50%;
	margin-left: 25%;
}
.recipe-instruction {
	cursor: pointer;
}
.recipe-ingredient {
	padding-left: 0;
}
.recipe-tag {
	background-color: gray;
	border-radius: 15px;
	padding: 5px;
	margin: 0px 5px;
	display: inline;
}

.selected {
	background-color: yellow;
}
</style>
