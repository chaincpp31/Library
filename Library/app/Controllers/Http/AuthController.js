'use strict'

const Database = use("Database");
const Helpers = use('Helpers')

class AuthController {
    async login ({view,request,response}) {
        return view.render("login");
        // const users = await Database.select("*").from("profiles").where({name: "John"})
        // .whereNot({age:20})
        // .whereBetween('age',[18,32]);
        // const name = "Ponlawat";
        // const age = 20;
        // const friends = ["Sue", "Bam", "Friend", "Fern"];
        // const address = {
        //     postcode: "10140",
        //     country: "Thailand",
        // }

        // return view.render("login", { name, age, friends, address })
    }
    loginUser({view,request,response}){
        const {username,password} = request.body
        // const profile = request.body
        // console.log(profile)

        // return view.render("login")
        return response.redirect("/login")

    }
    // register  ({view})  {
    //     return view.render("register")
    // }
    // async registerUser({request, response}){
    //     const {email,username, password} = request.body
    //     await Database.from("users").insert({email,username,password});
    //     console.log(email,username,password)

    //     return response.redirect("/login")
    // }
    form ({view}) {
        return view.render("formLogin")
    }


    async formLogin({request,response}){
        const {username,password} = request.body
        await Database.from("admin_users").insert({username,password});
        console.log(username,password)

        return response.redirect("/form")
    }
    //insert add book and del
    formstatus({view,request, response}){

        let name_img = Math.random().toString(36).substring(7); //random name


        const { book_id, book_name, book_category} = request.body
        const bookimg = request.file('book_img', {
            types: ['image'],
            size: '2mb'
        })
        
        await bookimg.move(Helpers.tmpPath('uploads'), {
            name: name_img+'.jpg',
            overwrite: true
        })
        
        const book_img = 'uploads/' + name_img + '.jpg'


        const data = await Database.from("books").insert({ book_id, book_name, book_img, book_category});


        return response.redirect("/Index")

    }
}


module.exports = AuthController;
