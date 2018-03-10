<template >
	<div id="user" class="border">
		<div class="wrap_routes">
			<h1>Hello User</h1>
			<router-link to="/user/MyProfile"> My Profile </router-link>
			<router-link to="/user/MySettings"> My Settings </router-link>
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
