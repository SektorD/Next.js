'use client'
import axios from "axios";
import React, { useRef } from "react";
import { Toaster, toast } from "sonner";
import styles from "./LoginForm.module.css";

export const RecForm = () => {

    const inputLogin = useRef(null);

    const changelogin = (e) => {
        e.preventDefault();

        const login = inputLogin.current.value
        console.log(login)

        axios.post('/api/login', {login}, {
            withCredentials: false,
        })
        .then(() => {
            toast.success('Восстановление пройдено')
        })
        .catch(() => {
            toast.error('Восстановление не удалось')
        })

    }

    return (
        <>
            <form onSubmit={(e => changelogin(e))} className={styles.form}>
                Email
                <input ref={inputLogin} type="email" placeholder="Email" className={styles.input}></input>
                <button className={styles.button}>Восстановить</button>
            </form>
            <Toaster position="botton-center" expand={false} richColors/>
        </>
    );
}