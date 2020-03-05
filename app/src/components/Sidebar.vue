<template>
	<div class="container">
		<div id="commands" v-bind:class="{ collapsed: isCollapsed }">
			<div v-show="!isCollapsed" class="arrow-icon" @click="toggleCollapse">
				&rsaquo;
			</div>
			<div v-show="isCollapsed" class="arrow-icon" @click="toggleCollapse">
				&lsaquo;
			</div>
			<template v-if="!isCollapsed">
				<h2>Voice Commands</h2>
				<h4>Ingredients</h4>
				<ul>
					<li>reads all the ingredients</li>
				</ul>
				<h4>Instruction</h4>
				<ul>
					<li>reads the current instruction</li>
				</ul>
				<h4>Next</h4>
				<ul>
					<li>reads the next instruction</li>
				</ul>
				<h4>Previous</h4>
				<ul>
					<li>reads the previous instruction</li>
				</ul>
				<!-- <h4>Repeat</h4>
				<ul>
					<li>
						repeats the current instruction or the list of ingredients
					</li>
				</ul> -->
				<h4>Timer &lt;time&gt;</h4>
				<ul>
					<li>starts a timer for the requested amount of time in minutes</li>
				</ul>
			</template>
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
			this.isCollapsed ^= 1;
		},
	},
});
</script>

<style scoped>
#commands {
	background-color: rgba(20, 50, 250, 0.7);
	color: white;
	border-radius: 30px 0 0 30px;
	height: 100%;
	padding-left: 5%;
	overflow: auto;
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
	font-size: 64px;
	display: inline-block;
	text-align: center;
	display: block;
	height: 55px;
	line-height: 55px;
	transform: translateY(-5px);
}
ul {
	list-style: none;
	margin-left: 5px;
	padding: 0;
}
ul li::before {
	color: "white";
	content: "-";
	display: inline-block;
	padding-right: 5px;
}
h4::before {
	content: "“";
}
h4::after {
	content: "”";
}
</style>
