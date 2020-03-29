<template>
	<div id="app">
		<Header />
		<router-view />
	</div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
	name: "app",
	components: {
		Header: () => import("@/components/Header.vue"),
	},
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans&display=swap");
html,
body {
	padding: 0;
	margin: 0;
	font-family: "Noto Sans", sans-serif;
}
</style>
