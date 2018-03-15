<template >
	<div id="explore">
		<div class="wrap">
			<div class="post" v-for="name in users" >
				<img :src="name.avatarUrl">
				<span>{{name._id}}</span>
			</div>
		</div>
	</div>
	
</template>

<script>
export default {
	data: function(){
		return {
			users: []
		}
	},
  created: function() {
    // this.user();
     var self = this;
      self.users = this.get('user', function(){
        // console.log(self.users);
        // console.log(self.users[0].avatarUrl);
    });
  }
}
</script>

<style lang="scss" scoped>
	img{
		width: 100px;
		height: auto;
		position: relative;
		display: block;
	}
	.wrap{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.post{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-right: 30px;
		text-align: center;
	}
</style>