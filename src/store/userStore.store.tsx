import { create } from "zustand";

interface UserStore {
    id: string;
    fullname: string;
    password: string;
    email: string;
    education: string;
    isAuth: boolean;
    setUser: (user: { id: string; fullname: string; password: string; email: string; education: string }) => void;
    clear: () => void;
}

const userStore = create<UserStore>((set) => ({
    id: "",
    fullname: "",
    password: "",
    email: "",
    education: "",
    isAuth: false,

    setUser: (user) => set({ 
        id: user.id,
        fullname: user.fullname,
        password: user.password,
        email: user.email,
        education: user.education,
        isAuth: true
    }),
    
    clear: () => set({ 
        id: "",
        fullname: "",
        password: "",
        email: "",
        isAuth: false
    }),


}));

export default userStore;