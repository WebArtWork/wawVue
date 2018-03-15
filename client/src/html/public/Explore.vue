<template >
	<div id="explore">
		<div class="post" v-for="name in users" >
			<span> Id {{ name.avatarUrl }} </span>
		</div>
		<p></p>
		<span>Explore</span>
	</div>
	
</template>

<script>
export default {
  created: function() {
    // this.user();
     var self = this;
      self.users = this.get('user', function(){
        console.log(self.users);
        console.log(self.users[0].avatarUrl);
    });
      
  }
}
</script>

<style lang="scss" scoped>
	span{
		color: black;
		padding: 10px;
		background-color: #ccc;
		margin-bottom: 10px;
		display: block;
	}
</style>