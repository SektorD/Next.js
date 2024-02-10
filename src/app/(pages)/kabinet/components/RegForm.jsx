'use client'
import axios from "axios";
import React, { useRef } from "react";
import { Toaster, toast } from "sonner";
import styles from "./LoginForm.module.css";

export const RegForm = () => {

    const inputName = useRef(null);
    const inputLogin = useRef(null);
    const inputPassword = useRef(null);
    const inputConfirmPassword = useRef(null);

    const changelogin = (e) => {
        e.preventDefault();

        const name = inputName.current.value
        const login = inputLogin.current.value
        const password = inputPassword.current.value
        const confirmPassword = inputConfirmPassword.current.value
        console.log(name, login, password, confirmPassword)

        axios.post('/api/login', {name, login, password, confirmPassword}, {
            withCredentials: false,
        })
        .then(() => {
            toast.success('Регистрация пройдена')
        })
        .catch(() => {
            toast.error('Регистрация не удалась')
        })

    }

    return (
        <>
            <form onSubmit={(e => changelogin(e))} className={styles.form}>
                Имя
                <input ref={inputName} type="name" placeholder="Имя" className={styles.input}></input>
                Email
                <input ref={inputLogin} type="email" placeholder="Email" className={styles.input}></input>
                Пароль
                <input ref={inputPassword} type="password" placeholder="Пароль" className={styles.input}></input>
                Повтоите пароль
                <input ref={inputConfirmPassword} type="confirmPassword" placeholder="Повторите пароль" className={styles.input}></input>
                <button className={styles.button}>Регистрация</button>
            </form>
            <Toaster position="botton-center" expand={false} richColors/>
        </>
    );
}