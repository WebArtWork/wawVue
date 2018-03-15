<template>
	<div id="start">
		<header class="header_start">
				<div class="wrapeer_header">
					<router-link to="/"> <img src="./assets/logo.png" alt="logo" class="logo"> </router-link>
					<nav>
						<h1>Welcome to my build WaWVue</h1>
						<router-link to="/Sign" class= "link"> Sign </router-link>
						<router-link to="/Login" class= "link"> Login </router-link>
					</nav>
				</div>
		</header>
    	<explore></explore>
	<router-view class="router"></router-view>
	</div>
</template>

<script>
import Explore from "./html/public/Explore.vue"
export default {
	components: {
		Explore
	}
}
</script>

<style lang="scss">
	#start{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		position: relative;
		.link{
			margin-right: 10px;
			color: black;
			padding: 15px 30px; 
			background-color: rgba(64,183,130,.6);
			transition: all .3s;
			&:nth-last-child(1){
				margin-right: 0;
			}
			&:hover{
				background-color: rgba(64,183,130,1);
			}
		}
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
		margin: 15px 50px;
	}
	.router{
		display: flex;
		flex-direction: column;
		position: relative;
		border-top:1px solid #40B782;
		border-bottom:1px solid #40B782;
		height: auto;
		padding: 0 30px;
	}
</style>