import { User } from "@/types/user.types";
import axios from "axios";


class UserService {
    constructor(){
    }
    

    static async login(user: Pick<User, "email" | "password">){
        try{
            const data = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/users/sign-in`,{
                email: user.email,  
                passwrod: user.password,
            });
            return data.data;
        }catch{
            console.error('Cant found connect with api')
        }
    }

    static async register(user: Omit<User, 'id'>){
        try{
            const data = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/users/sign-in`,{
                email: user.email,
                fullname: user.fullname,
                passwrod: user.password,
                education: user.education
            });
            return data.data;
        }catch{
            console.error('Cant found connect with api')
        }
    }
    
}

export default UserService;