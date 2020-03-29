<template>
	<div id="nav">
		<router-link class="nav-link" to="/"
			><div id="title">Reciplo</div></router-link
		>
		<router-link class="nav-link" to="/">Home</router-link>
		<!-- | -->
		<!-- <router-link class="nav-link" to="/about">About</router-link> -->
	</div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Baloo+Thambi+2&display=swap");
#nav {
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: rgb(66, 66, 66);
	padding: 10px;
	font-family: "Baloo Thambi 2", cursive;
}

.nav-link {
	padding: 0px 10px;
	text-decoration: none;
	color: white;
}

#title {
	font-size: 32px;
}
</style>
