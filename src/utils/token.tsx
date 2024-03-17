import jwt_decode from "jwt-decode"
import { IDecodedToken } from "../Types/types";

function saveToken(access_token:string) {
    localStorage.setItem("access_token", access_token)
    
}

function getToken():IDecodedToken | null {



    let token: string | null = localStorage.getItem("access_token") ?? null;
    try {
        if (typeof token === "string") {
            return jwt_decode(token);
        }
    } catch (error) {
        console.log(error);
        
    }
    
    return null

}

function destroyToken() {
    localStorage.removeItem("acces.token")
    localStorage.removeItem("rememberMe")
    window.location.pathname = "/"
}

export { saveToken, getToken, destroyToken };