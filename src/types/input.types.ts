import { ChangeEvent } from "react";

export interface InputProps {
    type: string,
    name: string;
    placeholder: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}