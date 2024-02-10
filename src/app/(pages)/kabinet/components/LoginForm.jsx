'use client'
import axios from "axios";
import React, { useRef } from "react";
import { Toaster, toast } from "sonner";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {

    const inputLogin = useRef(null);
    const inputPassword = useRef(null);

    const changelogin = (e) => {
        e.preventDefault();

        const login = inputLogin.current.value
        const password = inputPassword.current.value
        console.log(login, password)

        axios.post('/api/login', { login, password }, {
            withCredentials: false,
        })
        .then(() => {
            toast.success('Авторизация пройдена')
        })
        .catch(() => {
            toast.error('Авторизация не удалась')
        })

    }

    return (
        <>
            <form onSubmit={(e => changelogin(e))} className={styles.form}>
                Email
                <input ref={inputLogin} type="email" placeholder="Email" className={styles.input}></input>
                Пароль
                <input ref={inputPassword} type="password" placeholder="Пароль" className={styles.input}></input>
                <button className={styles.button}>Войти</button>
            </form>
            <Toaster position="botton-center" expand={false} richColors/>
        </>
    );
}