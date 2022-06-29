import { useState } from "react";

export default function useForm(initial = {}) {
    const [inputs, setInputs] = useState(initial);

    function handleChange(e) {
        let { name, type, value, checked } = e.target;

        if (type === "checkbox") value = checked;

        if (type === "number") value = parseInt(value);

        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    }   

    return {
        inputs,
        handleChange
    }
}