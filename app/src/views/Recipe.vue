<template>
	<div v-if="recipe === undefined">
		Recipe not found.
	</div>
	<main v-else>
		<div id="content">
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
					<template v-for="(v, i) of recipe.ingredients">
						<ul class="recipe-ingredient" :key="i">
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
		</div>
		<Sidebar />
		<Controls
			ref="controls"
			@read-ingredients="readIngredients"
			@read-instruction="readInstruction"
			@next="readNext"
			@previous="readPrevious"
		/>
	</main>
</template>

<script>
import Vue from "vue";
import { getRecipe } from "@/recipes.js";

export default Vue.extend({
	name: "app-recipe-details",
	components: {
		Sidebar: () => import("@/components/Sidebar.vue"),
		Controls: () => import("@/components/Controls.vue"),
	},
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
			this.readInstruction();
		},
		read(text) {
			this.$refs.controls.read(text);
		},
		readIngredients() {
			this.read("ingredients:");
			this.recipe.ingredients.forEach(this.read);
		},
		readInstruction() {
			this.read(this.recipe.instructions[this.activeInstruction]);
		},
		readNext() {
			if (this.activeInstruction == this.recipe.instructions.length - 1)
				return this.read("no further instructions");
			this.onInstructionClick(this.activeInstruction + 1);
		},
		readPrevious() {
			if (this.activeInstruction == 0)
				return this.read("no previous instructions");
			this.onInstructionClick(this.activeInstruction - 1);
		},
	},
});
</script>

<style scoped>
#content {
	width: 50%;
	margin-left: 25%;
	float: left;
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
