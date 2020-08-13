'use strict'

const Database = use("Database");
const Helpers = use('Helpers')


let sessionAdmin = 1;

class AuthController {
    // async login ({view,request,response}) {
    //     return view.render("login");
    //     // const users = await Database.select("*").from("profiles").where({name: "John"})
    //     // .whereNot({age:20})
    //     // .whereBetween('age',[18,32]);
    //     // const name = "Ponlawat";
    //     // const age = 20;
    //     // const friends = ["Sue", "Bam", "Friend", "Fern"];
    //     // const address = {
    //     //     postcode: "10140",
    //     //     country: "Thailand",
    //     // }

    //     // return view.render("login", { name, age, friends, address })
    // }
    // loginUser({view,request,response}){
    //     const {username,password} = request.body
    //     // const profile = request.body
    //     // console.log(profile)

    //     // return view.render("login")
    //     return response.redirect("/login")

    // }
    // register  ({view})  {
    //     return view.render("register")
    // }
    // async registerUser({request, response}){
    //     const {email,username, password} = request.body
    //     await Database.from("users").insert({email,username,password});
    //     console.log(email,username,password)

    //     return response.redirect("/login")
    // }

    IndexAdmin({ view }){
        return view.render("Index_admin")
    }

    form ({view}) {
        return view.render("formLogin",{ sessionAdmin })
    }


    async formLogin({view,request,response}){
        const {usernameform,passwordform} = request.body
    
        const data = await Database.select('*').from("admin_users").where({username: usernameform}) ;

        console.log(data)
        if (data.length == 0){
            sessionAdmin =1;
            return view.render("formLogin")
        }
        else {
            const user = data[0].username
            const pass = data[0].password 
            if (user == usernameform && pass == passwordform){
                sessionAdmin = 2;
                return response.redirect("/formstatus", {sessionAdmin})
            }
            
        }
    }

    async formlogout({response}) {
        sessionAdmin = 1;
        return response.redirect("/formlogin")
    }

    
    
    //insert add book and del

    formadd({view}){
        return view.render("formadd", { sessionAdmin })
    }

    async formaddbook({ request, response }) {
        let name_img = Math.random().toString(36).substring(7); //random name
        const { book_add_del } = request.body
        //if 1 = ADD  else 2 ==Del
        if (parseInt(book_add_del) == 1) {
            const { book_id, book_name, book_category } = request.body
            let name_img = Math.random().toString(36).substring(7); //random name
            const bookimg = request.file('book_img', {
                types: ['image'],
                size: '2mb'
            })
            await bookimg.move(Helpers.tmpPath('uploads'), {
                name: name_img + '.jpg',
                overwrite: true
            })
            const book_img = 'uploads/' + name_img + '.jpg'
            await Database.from("books").insert({ book_id, book_name, book_img, book_category });
            console.log(book_id, book_name)
        }
        else {
            const { book_id } = request.body
            await Database.from("books").where({book_id}).del()
        }
        return response.redirect("/formadd", { sessionAdmin })

    }

    formstatusget({ view }) {
        return view.render("formstatus", { sessionAdmin })
    }




    //rent-restore
    async formstatus({ request, response }) {
        let name_img = Math.random().toString(36).substring(7); //random name
        const { book_rent_restore } = request.body
        //if 1 = rent  else 2 ==restore
        if (parseInt(book_rent_restore) == 1) {
            const { book_id, student_id } = request.body
            var d = new Date();
            var date_rent = parseInt(d.getFullYear().toString() + (d.getMonth() + 1).toString() + d.getDate().toString());
            var deadline = date_rent + 7;
            //toString
            date_rent = date_rent.toString();
            deadline = deadline.toString();
            const status = "ถูกยืม"
            const book_img = 'uploads/' + name_img + '.jpg'
            await Database.from("status_books").insert({ student_id, book_id, date_rent, deadline, status });
        }
        else {
            const { student_id } = request.body
            const student_del_id = student_id;
            await Database.table("status_books").where({ student_id: student_del_id }).delete()
        }
        return response.redirect("/formstatus", { sessionAdmin })
    }

    //search

    searchget({ view }) {

        return view.render("search")

    }
    async search({ request, response }){
        const { search } = request.body

        const dataSearch = await Database.select('*').from("books").where({ book_name: search});

        console.log(dataSearch)

        //console.log(dataSearch[0].book_name )
        return response.redirect("/search", { dataSearch})

        
    }
}


module.exports = AuthController;
