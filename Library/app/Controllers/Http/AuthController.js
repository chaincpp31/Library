'use strict'

const Database = use("Database");

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
        const profile = request.body
        console.log(profile)

        // return view.render("login")
        return response.redirect("/login")

    }
    register = ({view}) => {
        return view.render("register")
    }
}


module.exports = AuthController;
