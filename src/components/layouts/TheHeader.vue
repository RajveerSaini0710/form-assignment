<template>
	<header>
		<nav>
			<h1 class="text-2xl">
				<router-link to="/"> Form {{ this.$route.fullPath.includes('form') ? ' Registration' :
					(this.$route.fullPath.includes('edit') ? "Edit" : " Data") }}
				</router-link>
			</h1>
			<ul>
				<li>
					<router-link to="/form"> Registration </router-link>
				</li>
				<li>
					<router-link to="/data"> Form Data </router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap');

header {
	width: 100%;
	height: 5rem;
	background-color: #3d008d;
	display: flex;
	justify-content: center;
	align-items: center;
}

header a {
	text-decoration: none;
	color: #f391e3;
	display: inline-block;
	padding: 0.75rem 1.5rem;
	border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
	border: 1px solid #f391e3;
}

h1 {
	font-family: 'Sixtyfour', sans-serif;
	word-spacing: -10px;
	margin: 0;
}

h1 a {
	color: white;
	margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
	border-color: transparent;
}

header nav {
	width: 97%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

header ul {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}

li {
	margin: 0 0.5rem;
}
</style>
