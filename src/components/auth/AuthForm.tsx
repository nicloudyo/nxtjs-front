'use client'
import { useForm } from "@/hooks/useForm"
import { Form } from "./form/Form"
import { Input } from "./form/Input"
import { Button } from "./form/Button";
import { ChangeForm } from "./form/ChangeForm";
import { Title } from "./form/Title";
import UserService from "@/services/user.service";
import userStore from "@/store/userStore.store";
import { FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

export const AuthForm = () => {
    const userState = userStore();

    const { formData, handleChange } = useForm({
        email: "",
        password: "",
    });

    const router = useRouter();

    useEffect(() => {
        if (userState.isAuth) {
            router.push('/');
        }
    }, [userState.isAuth, router]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const data = await UserService.login(formData.email, formData.password);
            if (!!data) {
                userState.setUser({
                    id: data.id,
                    fullname: data.fullname,
                    email: data.email,
                    password: data.password,
                    education: data.education
                });
                router.push('/')
            }

        } catch (error) {
            console.error("Login error:", error);
        }
    }

    return (
        <Form submit={handleSubmit}>
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