<template >
	<div id="pablic" class="border">
		<div class="wrap_routes">
			<h1>Hello Public</h1>
			<router-link to="/public/Explore"> Explore </router-link>
			<router-link to="/public/Login"> Login </router-link>
			<router-link to="/public/Profile"> Profile </router-link>
			<router-link to="/public/Sign"> Sign </router-link>
		</div>
		<router-view></router-view>
	</div>

</template>

<script>

</script>


<style lang="scss">
	.wrap_routes{
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 50px;
	}
</style>