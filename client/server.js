module.exports = function(app, sd) {
	/*
	*	Simple
	*	[add simple below this line]
	*/
		var Login = function(req, res){
			res.render('simple/Login', sd._ro(req, res, {}));
		}
		app.get('/Login', Login);
		app.get('/Login/en', sd._set_en, Login);
		app.get('/Login/ua', sd._set_ua, Login);
		app.get('/Login/ru', sd._set_ru, Login);
	/*
	*	Local
	*	[add local below this line]
	*/
		var Explore = function(req, res){
			res.render('local/Explore', sd._ro(req, res, {}));
		}
		app.get('/', Explore);
		app.get('/en', sd._set_en, Explore);
		app.get('/ua', sd._set_ua, Explore);
		app.get('/ru', sd._set_ru, Explore);

		var Profile = function(req, res){
			res.render('local/Profile', sd._ro(req, res, {}));
		}
		app.get('/Profile/:_id', Profile);
		app.get('/Profile/:_id/en', sd._set_en, Profile);
		app.get('/Profile/:_id/ua', sd._set_ua, Profile);
		app.get('/Profile/:_id/ru', sd._set_ru, Profile);

		var Sign = function(req, res){
			res.render('local/Sign', sd._ro(req, res, {}));
		}
		app.get('/Sign', Sign);
		app.get('/Sign/en', sd._set_en, Sign);
		app.get('/Sign/ua', sd._set_ua, Sign);
		app.get('/Sign/ru', sd._set_ru, Sign);
	/*
	*	Local Routes
	*	[add local routes below this line]
	*/
		var Admin = function(req, res){
			res.render('Admin', sd._ro(req, res, {}));
		}
		app.get('/Admin', sd._ensureAdmin, Admin);
		app.get('/Admin/*', sd._ensureAdmin, Admin);

		var User = function(req, res){
			res.render('User', sd._ro(req, res, {}));
		}
		app.get('/:page', sd._ensure, User);
	/*
	*	Scripts
	*/
	/*
	*	End of
	*/
};