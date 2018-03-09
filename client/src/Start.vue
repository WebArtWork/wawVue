<template>
	<div id="start">
		<header class="header_start">
			<img src="./assets/logo.png" alt="logo" class="logo">
			<div class="wrapeer_header">
				<nav class="bu">
					<h1>Welcome to my build WaWVue</h1>
					<router-link to="/"> Admin </router-link>
					<router-link to="/"> Public </router-link>
					<router-link to="/"> User </router-link>
				</nav>
			</div>
		</header>
		<router-view class ="content"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'Start',
		component:("start",{
			template: "#start-template"
		})
	}

</script>
<style lang="scss">
	#start{
		width: 100%;
		height: 100%;
		text-align: center;
		a{
			text-decoration: none;
			margin-right: 10px;
			&:nth-last-child(1){
				margin-right: 0;
			}
		}
	}
	.header_start{
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		justify-content: center;
		position: relative;
	}
	.logo{
		display: flex;
		max-width: 100%;
		height: auto;
		position: relative;
	}
</style>