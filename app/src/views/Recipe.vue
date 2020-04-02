<template>
	<div v-if="recipe === undefined">
		Recipe not found.
	</div>
	<main v-else>
		<div id="banner">
			<img v-if="recipe.thumbnailURL" :src="recipe.thumbnailURL" />
		</div>
		<div id="content">
			<div>
				<h1 style="margin-bottom: 5px;">{{ recipe.name }}</h1>
				<em>by {{ recipe.author }}</em>
				<br />
				<strong>Prep time: </strong>{{ recipe.time }}
				<br />
				<strong>Serves: </strong>{{ recipe.serves }}
			</div>
			<div id="ingredients">
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
			<div id="instructions">
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
			@read-instruction-index="onInstructionClick"
			@next="readNext"
			@previous="readPrevious"
			@timer="addTimer"
		/>
		<Timers ref="timers" />
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
		Timers: () => import("@/components/Timers.vue"),
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
			this.read("step " + (parseInt(this.activeInstruction) + 1) + ":");
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
		addTimer(time) {
			this.$refs.timers.addTimer(time);
		},
	},
});
</script>

<style scoped>
#banner {
	z-index: -100;
	top: 0;
	position: absolute;
	margin: 0;
	width: 100%;
}
#banner > img {
	object-fit: cover;
	width: 100%;
	height: 50vh;
	box-shadow: rgba(78, 78, 78, 0.7) 0px 4px 10px;
}
#content {
	width: 50%;
	margin-top: 45vh;
	margin-left: 25%;
	float: left;
	font-family: "Noto Sans", sans-serif;
}
#ingredients {
	margin-top: 5%;
	padding: 2%;
	background-color: whitesmoke;
	border-radius: 5px;
	box-shadow: rgba(78, 78, 78, 0.5) 2px 2px 10px;
}
#instructions {
	margin-top: 5%;
	margin-bottom: 10%;
	padding: 2%;
	background-color: whitesmoke;
	border-radius: 5px;
	box-shadow: rgba(78, 78, 78, 0.5) 2px 2px 10px;
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
