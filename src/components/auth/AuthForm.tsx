'use client'
import { useForm } from "@/hooks/useForm"
import { Form } from "./form/Form"
import { Input } from "./form/Input"
import { Button } from "./form/Button";
import { ChangeForm } from "./form/ChangeForm";
import { Title } from "./form/Title";
import UserService from "@/services/user.service";
import { User } from "@/types/user.types";
import userStore from "@/store/userStore.store";

export const AuthForm = () => {
    const userState = userStore();
    const { formData, handleChange } = useForm({
        email: "",
        password: "",
    });

    const handleClick = async (credentials: { email: string; password: string }) => {
        const data = await UserService.login(credentials);
        userState.setUser(data);
    }
    return (
        <Form>
            <Title text="Войдите в личный кабинет" />
            <Input name="email" placeholder="Введите Email" type="email" value={formData.email} onChange={handleChange} />
            <Input name="password" placeholder="Введите пароль" type="password" value={formData.password} onChange={handleChange} />
            <Button>
                <span>Войти</span>
            </Button>
            <ChangeForm link="/register" text="Регистрация" />
        </Form>
    )
}