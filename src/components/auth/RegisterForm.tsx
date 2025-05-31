'use client'
import { useForm } from "@/hooks/useForm";
import { Form } from "./form/Form";
import { Input } from "./form/Input";
import { Button } from "./form/Button";
import { ChangeForm } from "./form/ChangeForm";
import { Title } from "./form/Title";



export const RegisterForm = () => {
    const { formData, handleChange } = useForm({
        email: "",
        name: "",
        institution: "",
        password: "",
    });
    return (
        <Form>
            <Title text="Зарегистрируйтесь!"/>
            <Input name="email" placeholder="Введите Email" type="email" value={formData.email} onChange={handleChange} />
            <Input name="name" placeholder="Введите Имя" type="text" value={formData.name} onChange={handleChange} />
            <Input name="institution" placeholder="Введите учебное заведение" type="text" value={formData.institution} onChange={handleChange} />
            <Input name="password" placeholder="Введите пароль" type="password" value={formData.password} onChange={handleChange} />
            <Button>
                <span>Зарегистрируйтесь</span>
            </Button>
            <ChangeForm link="/login" text="Войти" />
        </Form>
    )
}