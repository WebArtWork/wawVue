<template>
	<div id="start">
		<header class="header_start">
				<div class="wrapeer_header">
					<router-link to="/"> <img src="./assets/logo.png" alt="logo" class="logo"> </router-link>
					<nav>
						<h1>Welcome to my build WaWVue</h1>
						<router-link to="/public/Sign"> Sign </router-link>
						<router-link to="/public/Login"> Login </router-link>
					</nav>
				</div>
		</header>
	<router-view class="router"></router-view>
	</div>
</template>

<script>
</script>
<style lang="scss">
	#start{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		position: relative;
		a{
			text-decoration: none;
			margin-right: 10px;
			color: #40B782;
			&:nth-last-child(1){
				margin-right: 0;
			}
		}
	}
	.border{
		border-left: 1px solid #ccc; 
		padding-left: 20px;
	}
	.header_start{
		display: flex;
		// align-items: center;
		flex-direction: column;
		width: 100%;
		height: 200px;
		justify-content: flex-start;
		position: relative;
	}
	.wrapeer_header{
		display: flex;
		justify-content: flex-start;
	}
	.logo{
		display: flex;
		max-width: 100%;
		height: 100px;
		position: relative;
		justify-content: flex-start;
		margin: 0 50px;
	}
	.router{
		display: flex;
		flex-direction: row;
		position: relative;
		border:1px solid #40B782;
		height: auto;
	}
</style>