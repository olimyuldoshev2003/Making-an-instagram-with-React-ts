import jwt_decode from "jwt-decode"
import { setGotToken } from "../reducers/values";

function saveToken(access_token:string) {
    localStorage.setItem("access_token", access_token)
    
}

function getToken() {



    let token:string|null = localStorage.getItem("access_token");
    try {
        if (typeof token === "string") {
            return jwt_decode(token);
        }
    } catch (error) {
        console.log(error);
        
    }
    

}

function destroyToken() {
    localStorage.removeItem("acces.token")
    localStorage.removeItem("rememberMe")
    window.location.pathname = "/"
}

export { saveToken, getToken, destroyToken };