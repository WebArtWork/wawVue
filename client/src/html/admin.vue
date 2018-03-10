<template >
	<div id="admin" class="border">
		<div class="wrap_routes">
			<h1>Hello Admin</h1>
			<router-link to="/admin/Profile"> Profile </router-link>
			<router-link to="/admin/SuperAdmin"> SuperAdmin </router-link>
			<router-link to="/admin/Users"> Users </router-link>
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