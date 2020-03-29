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
		<div v-for="(time, i) of timers" :key="i">
			<div v-if="time % 60 > 9">
				{{ String(Math.floor(time / 60)) + ":" + String(time % 60) }}
			</div>
			<div v-else>
				{{ String(Math.floor(time / 60)) + ":0" + String(time % 60) }}
			</div>
		</div>
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
	position: fixed;
	bottom: 0px;
	left: 0px;
	width: 20%;
	text-align: center;
	font-size: 24px;
	color: white;
	background-color: rgb(66, 66, 66);
}
</style>
