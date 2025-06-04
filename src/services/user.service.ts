import { User } from "@/types/user.types";
import axios from "axios";


class UserService {
    constructor(){
    }
    

    static async login(email: string, password: string){
        try{
            console.log(email, password)
            const data = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/users/sign-in`,{
                email: email,  
                password: password
            });
            console.log(data);
            return data.data;
        }catch{
            console.error('Cant found connect with api')
        }
    }

    static async register(email: string, fullname: string, password: string, education: string){
        try{
            const data = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/users/sign-up`,{
                email: email,
                fullname: fullname,
                password: password,
                education: education
            });
            return data.data;
        }catch{
            console.error('Cant found connect with api')
        }
    }
    
}

export default UserService;