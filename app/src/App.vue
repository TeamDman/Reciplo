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
html,
body {
	padding: 0;
	margin: 0;
}
</style>
