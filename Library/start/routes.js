'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Helpers = use('Helpers') //for กันแตกส้งรูปภาพ


Route.on('/').render('home')
// Route.on("/login").render("login")

// Route.get("/login" ,"AuthController.login")
// Route.post("/login","AuthController.loginUser")

// Route.get("/register" ,"AuthController.register");

// Route.on('/').render('welcome')
// Route.get("/register","AuthController.register");

// //Route.on('/login').render("login");
// Route.get("/register", "AuthController.register")
// Route.post("register", "AuthController.registerUser")

// Route.post("/api/register", "AuthController.registerUser")

// Route.get("/login", "AuthController.login")
// Route.post("/login", "AuthController.loginUser")

//project workspace

// Route.on('/layout1').render('layout1')
Route.on('/Index').render('Index')
//Route.get("/Index", "AuthController.IndexAdmin")
Route.on('/Index_admin').render('Index_admin')



//search
Route.post('/search', "AuthController.search")
Route.get('/search', "AuthController.searchget")

// Route.get('/form').render('formlogin')

Route.get("/form", "AuthController.form")

Route.post("/form", "AuthController.formLogin")

Route.get("/formlogin", "AuthController.form")

Route.get("/formlogout", "AuthController.formlogout")

//Route.on('/formstatus').render('formstatus')


//status form


Route.get('/formadd', "AuthController.formadd")
Route.post('/formadd', "AuthController.formaddbook")


Route.get('/formstatus', "AuthController.formstatusget")
Route.post('/formstatus', "AuthController.formstatus")


Route.get('/formstatus', "AuthController.formstatusget")
Route.post('/formstatus', "AuthController.formstatus")

Route.get('/Index_admin',"AuthCintroller.Index_admin")


