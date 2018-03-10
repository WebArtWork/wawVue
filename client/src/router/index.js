import Vue from 'vue'
import Router from 'vue-router'
import Explore from '@/html/public/Explore'
import Login from '@/html/public/Login'
import Profile from '@/html/public/Profile'
import Sign from '@/html/public/Sign'
import adminProfile from '@/html/admin/Profile'
import SuperAdmin from '@/html/admin/SuperAdmin'
import Users from '@/html/admin/Users'
import MyProfile from '@/html/user/MyProfile'
import MySettings from '@/html/user/MySettings'
import AdminPage from '@/html/admin'
import UserPage from '@/html/user'
import PublicPage from '@/html/public'


Vue.use(Router)

export default new Router({
 routes: [
	{ 
		path: '/admin/:name',
		name: "Admin",
		component: AdminPage,
		children: [
			{
				path: 'Profile',
				name: "pageThree",
				component: adminProfile
			},
			{
				path: 'SuperAdmin',
				name: "pageSix",
				component: SuperAdmin
			},
			{
				path: 'Users',
				name: "pageSeven",
				component: Users
			}

		]
	},
	{
		path: '/user',
		name: "User",
		component: UserPage,
		children: [
			{
				path: 'MyProfile',
				name: "pageEight ",
				component: MyProfile
			},
			{
				path: 'MySettings',
				name: "pageNine",
				component: MySettings
			}
		]
	},
	{
		path: '/public',
		name: "Public",
		component: PublicPage,
		children: [
			{
				path: 'Explore',
				name: "pageOne",
				component: Explore
			},
			{
				path: 'Login',
				name: "pageTwo",
				component: Login
			},
			{
				path: 'Profile',
				name: "pageFive",
				component: Profile
			},
			{
				path: 'Sign',
				name: "pageFour",
				component: Sign
			}
		]
	}
	],
	// mode: 'history'
})
