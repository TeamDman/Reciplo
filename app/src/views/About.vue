<template>
	<div>
		Howdy,
		<h1>{{ text }}</h1>
		<h2>{{ house }}</h2>
		<input v-model="text" />
		<button @click="listen">listen</button>
		<div :style="{ 'background-color': color }">{{ speech }}</div>
	</div>
</template>

<script>
export default {
	name: "app-about",
	data() {
		return {
			text: "beer",
			speech: "",
			color: "red",
		};
	},
	watch: {
		speech(next) {
			if (next.match("next")) {
				this.color = "blue";
			} else if (next.match("previous")) {
				this.color = "orange";
			} else {
				this.color = "red";
			}
		},
	},
	methods: {
		listen() {
			console.log("howdy");
			const x = window.SpeechRecognition || window.webkitSpeechRecognition;
			let recog = new x();
			recog.onresult = e => {
				console.dir(e);
				this.speech = e.results[0][0].transcript;
			};
			recog.start();
		},
	},
	computed: {
		house() {
			return this.text + " is my city";
		},
	},
};
</script>
