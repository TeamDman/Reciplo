<template>
	<div id="container">
		<!-- <embed
			src="cursed.wav"
			autostart="false"
			autoplay="false"
			width="0"
			height="0"
			ref="alarm"
			enablejavascript="true"
		/> -->
		<div v-for="(time, i) of timers" :key="i">{{ time }}s</div>
	</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
	name: "app-timers",
	data() {
		return {
			timers: [],
			inter: null,
		};
	},
	methods: {
		addTimer(endTime) {
			if (isNaN(endTime)) return;
			this.timers.push(parseInt(endTime) * 60);
		},
		beep() {
			// console.log("fick", this.timers);
			// this.$refs.alarm.Play();
			new Audio("cursed.wav").play();
		},
	},
	created() {
		this.inter = setInterval(() => {
			this.timers = this.timers
				.map(x => x - 1)
				.filter(x => x >= 0 || this.beep());
		}, 1000);
	},
	destroyed() {
		clearInterval(this.inter);
	},
});
</script>

<style scoped>
#container {
	position: absolute;
	bottom: 0px;
	right: 0px;
	width: 400px;
	background-color: #4caf50; /* Green */
}
</style>
