'use client'
import { useForm } from "@/hooks/useForm";
import { Form } from "./form/Form";
import { Input } from "./form/Input";
import { Button } from "./form/Button";
import { ChangeForm } from "./form/ChangeForm";
import { Title } from "./form/Title";
import UserService from "@/services/user.service";
import userStore from "@/store/userStore.store";



export const RegisterForm = () => {
    const userState = userStore();
    const { formData, handleChange } = useForm({
        email: "",
        fullname: "",
        education: "",
        password: "",
    });
    const handleClick = async (credentials: { email: string; password: string; education: string; fullname: string }) => {
        const data = await UserService.register(credentials);
        userState.setUser(data);
    }
    return (
        <Form>
            <Title text="Зарегистрируйтесь!"/>
            <Input name="email" placeholder="Введите Email" type="email" value={formData.email} onChange={handleChange} />
            <Input name="fullname" placeholder="Введите Имя" type="text" value={formData.fullname} onChange={handleChange} />
            <Input name="education" placeholder="Введите учебное заведение" type="text" value={formData.education} onChange={handleChange} />
            <Input name="password" placeholder="Введите пароль" type="password" value={formData.password} onChange={handleChange} />
            <Button>
                <span>Зарегистрируйтесь</span>
            </Button>
            <ChangeForm link="/login" text="Войти" />
        </Form>
    )
}