import { create } from "zustand";

interface UserStore {
    id: string;
    fullname: string;
    password: string;
    email: string;
    setUser: (user: { id: string; fullname: string; password: string; email: string }) => void;
    clear: () => void;
}

const userStore = create<UserStore>((set) => ({
    id: "",
    fullname: "",
    password: "",
    email: "",
    
    setUser: (user) => set({ 
        id: user.id,
        fullname: user.fullname,
        password: user.password,
        email: user.email
    }),
    
    clear: () => set({ 
        id: "",
        fullname: "",
        password: "",
        email: ""
    })
}));

export default userStore;