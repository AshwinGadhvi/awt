class Auth{
    #login(){
        console.log('Login success');
        return "login success";
    }
    #logout(){
        console.log("Logout");
        return "logout";
    }

    *authFlow(){
        yield this.#login()
        yield this.#logout()
    }
}

const auth = new Auth();
const authFlow = auth.authFlow();

authFlow.next();
authFlow.throw("login Faile");
authFlow.next();


//redux saga