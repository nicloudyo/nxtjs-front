'use client'
import { useForm } from "@/hooks/useForm"
import { Form } from "./form/Form"
import { Input } from "./form/Input"
import { Button } from "./form/Button";
import { ChangeForm } from "./form/ChangeForm";
import { Title } from "./form/Title";

export const AuthForm = () => {
    const {formData, handleChange} = useForm({
        email: "",
        password: "",
    });
    return (
        <Form>
            <Title text="Войдите в личный кабинет" />
            <Input name="email" placeholder="Введите Email" type="email" value={formData.email} onChange={handleChange}/>  
            <Input name="password" placeholder="Введите пароль" type="password" value={formData.password} onChange={handleChange}/> 
            <Button> 
                <span>Войти</span>
            </Button>
            <ChangeForm link="/register" text="Регистрация"/>
        </Form>
    )
}