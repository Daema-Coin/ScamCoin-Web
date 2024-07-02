/* eslint-disable @typescript-eslint/naming-convention */
import { useState, type ChangeEvent } from "react";

/** 여러개의 input 상태를 관리하는 hook입니다.*/
export function useForm<T>(initialState: T) {
  const [form, setForm] = useState<T>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return { form, setForm, handleChange };
}
