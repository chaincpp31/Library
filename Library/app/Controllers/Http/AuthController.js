'use strict'

class AuthController {
    login = ({view,request,response}) => {
        const name = "Ponlawat";
        const age = 20;
        const friends = ["Sue", "Bam", "Friend", "Fern"];
        const address = {
            postcode: "10140",
            country: "Thailand",
        }

        return view.render("login", { name, age, friends, address })
    }
    register = ({view}) => {
        return view.render("register")
    }
}


module.exports = AuthController
