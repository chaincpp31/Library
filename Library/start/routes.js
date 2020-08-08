'use strict'

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


Route.on('/').render('home')
// Route.on("/login").render("login")

Route.get("/login" ,"AuthController.login")
Route.post("/login","AuthController.loginUser")

// Route.get("/register" ,"AuthController.register");

// Route.on('/').render('welcome')
// Route.get("/register","AuthController.register");

//Route.on('/login').render("login");
Route.get("/register", "AuthController.register")
Route.post("register", "AuthController.registerUser")

Route.post("/api/register", "AuthController.registerUser")

Route.get("/login", "AuthController.login")
Route.post("/login", "AuthController.loginUser")

// Rout.get("/form", "AuthController.form")
// Rout.post("/form", "AuthController.formregister")

//project workspace

Route.on('/layout1').render('layout1')
Route.on('/Index').render('form')






