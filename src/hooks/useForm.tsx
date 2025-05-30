import { ChangeEvent, useState } from "react";



export const useForm = <T extends Record<string, string>>(initialState: T) => {
    const [formData, setFormData] = useState<T>(initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value}));
    }

    const resetForm = () => setFormData(initialState);

    return {formData, handleChange, resetForm};
}