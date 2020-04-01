<template>
	<div id="container">
		<link
			href="https://fonts.googleapis.com/icon?family=Material+Icons"
			rel="stylesheet"
		/>
		<button class="btn material-icons" @click="stop">stop</button>
		<button class="btn material-icons" @click="pause">pause</button>
		<button class="btn material-icons" @click="resume">play_arrow</button>
		<button class="btn material-icons" @click="record">mic</button>
	</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
	name: "app-controls",
	data() {
		return {
			recog: new (window.SpeechRecognition || window.webkitSpeechRecognition)(),
			lastInstruction: 0,
		};
	},
	created() {
		this.recog.onresult = e => {
			console.dir(e);
			this.parse(e.results[e.results.length - 1][0].transcript);
			// this.recog.start();
		};
		// this.recog.onend = e => {
		// 	console.log("ended", e);
		// 	// console.dir(e);
		// 	this.recog.start();
		// };
		// this.recog.onend = this.recog.start;
		this.recog.continuous = true;
		this.recog.interimResults = true;
		this.recog.start();
	},
	methods: {
		pause() {
			window.speechSynthesis.pause();
		},
		resume() {
			window.speechSynthesis.resume();
		},
		stop() {
			window.speechSynthesis.cancel();
		},
		read(text) {
			// this.stop();
			// this.resume();
			window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
		},
		parse(vocals) {
			if (this.lastInstruction + 2000 > Date.now()) return;
			this.lastInstruction = Date.now();
			vocals = vocals.toLowerCase();
			console.log("heard", vocals);
			if (vocals.match("ingredient")) return this.$emit("read-ingredients");
			if (vocals.match("instruction")) return this.$emit("read-instruction");
			if (vocals.match("next")) return this.$emit("next");
			if (vocals.match("previous")) return this.$emit("previous");
			if (vocals.match("pause")) return this.pause();
			if (vocals.match("stop")) return this.stop();
			if (vocals.match("resume") || vocals.match("play")) return this.resume();
			if (vocals.match(/timer?.*\d+/))
				return this.$emit("timer", vocals.match(/\d+/));
			this.lastInstruction = 0;
		},
		record() {
			this.recog.start();
		},
	},
});
</script>

<style scoped>
#container {
	position: fixed;
	bottom: 0px;
	width: 400px;
	left: 50%;
	transform: translateX(-50%);
	background-color: rgb(255, 44, 44);
}
.btn {
	background-color: transparent;
	border: none;
	cursor: pointer;
	color: white;
	padding: 5px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 32px;
}
</style>
