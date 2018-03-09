import Vue from 'vue'
import Router from 'vue-router'
import Explore from '@/public/Explore'
import Login from '@/public/Login'
import Profile from '@/public/Profile'
import Sign from '@/public/Sign'
import adminProfile from '@/admin/Profile'
import SuperAdmin from '@/admin/SuperAdmin'
import Users from '@/admin/Users'
import MyProfile from '@/user/MyProfile'
import MySettings from '@/user/MySettings'


Vue.use(Router)

export default new Router({
 routes: [
	{ 
		path: '/Explore',
		name: "pageOne",
		component: Explore
	},
	{ 
		path: '/Login',
		name: "pageTwo",
		component: Login
	},
	{ 
		path: '/Profile',
		name: "pageThree",
		component: Profile
	},
	{ 
		path: '/Sign',
		name: "pageFour",
		component: Sign
	},
	{ 
		path: '/Profile',
		name: "pageFive",
		component: adminProfile
	},
	{ 
		path: '/SuperAdmin',
		name: "pageSix",
		component: SuperAdmin
	},
	{ 
		path: '/Users',
		name: "pageSeven",
		component: Users
	},
	{ 
		path: '/MyProfile',
		name: "pageEight ",
		component: MyProfile
	},
	{ 
		path: '/MySettings',
		name: "pageNine",
		component: MySettings
	}
	],
	// mode: 'history'
})
