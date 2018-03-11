const UserJs = {
	install(Vue, options) {
	var self = this;
	   Vue.prototype.user = function(part, obj, cb) {
	 		this.$http.get('/api/user/me').then(response => {

	    for(let key in response.data){
	        self[key] = response.data[key];
	    }
	    console.log(self + " This console is file user.js");
	  }, response => {
	    // error callback
	  });
	 	}
	}
};

export default UserJs;