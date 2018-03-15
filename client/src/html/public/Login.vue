<template >
	<div>
		<div>
			<div>
				<div>
					<form action="/api/user/login" method="POST">
						<h1>Login</h1>
						<label>
							<h2>E-mail</h2>
							<input type="email" name="username" placeholder="email">
						</label>
						<label>
							<h2>Password</h2>
							<input type="password" name="password" placeholder="password">
						</label>
						<button>Sign</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

</script>

<style lang="scss">

</style>