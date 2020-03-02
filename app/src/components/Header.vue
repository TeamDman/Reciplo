<template>
	<div id="nav">
		<div id="title">Reciplo</div>
		<router-link class="nav-link" to="/">Home</router-link>|
		<router-link class="nav-link" to="/about">About</router-link>
	</div>
</template>

<style scoped>
#nav {
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: purple;
	padding: 10px;
}

.nav-link {
	padding: 0px 10px;
	text-decoration: none;
	color: white;
}

#title {
	font: 32px Jokerman;
}
</style>
