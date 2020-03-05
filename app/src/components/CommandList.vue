<template>
	<div class="container">
		<div id="commands" v-bind:class="{ collapsed: isCollapsed == true }">
			<img
				v-bind:class="{ 'arrow-icon': true, reversed: isCollapsed == true }"
				class="arrow-icon"
				src="https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-right-512.png"
				@click="toggleCollapse"
			/>
			<h2 v-if="isCollapsed == false">Voice Commands</h2>
			<h4 v-if="isCollapsed == false">Read Ingredients</h4>
			<p v-if="isCollapsed == false">- reads all the ingredients</p>
			<h4 v-if="isCollapsed == false">Read Instruction</h4>
			<p v-if="isCollapsed == false">- reads the current instruction</p>
			<h4 v-if="isCollapsed == false">Next</h4>
			<p v-if="isCollapsed == false">- reads the next instruction</p>
			<h4 v-if="isCollapsed == false">Repeat</h4>
			<p v-if="isCollapsed == false">
				- repeats the current instruction or the list of ingredients
			</p>
			<h4 v-if="isCollapsed == false">Set a timer for _</h4>
			<p v-if="isCollapsed == false">
				- starts a timer for the requested amount of time
			</p>
			<br />
		</div>
	</div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
	name: "command-list",
	data() {
		return {
			isCollapsed: false,
		};
	},
	methods: {
		toggleCollapse() {
			this.isCollapsed = !this.isCollapsed;
		},
	},
});
</script>

<style>
#commands {
	background-color: rgba(20, 50, 250, 0.7);
	color: white;
	border-radius: 10% 0 0 10%;
	height: 100%;
	padding-left: 5%;
}
.container {
	float: right;
	margin-top: 3%;
	width: 20%;
}
.collapsed {
	transform: translate(75%);
	overflow: hidden;
}
.arrow-icon {
	width: 20%;
	cursor: pointer;
}
.reversed {
	transform: rotate(180deg);
}
</style>
