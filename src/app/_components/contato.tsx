import styles from '~/styles/contato.module.css'
import React from 'react'
import Swal from 'sweetalert2'
export function Contato() {
    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ae259da7-1600-465b-9085-3991bc7a7d84");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            Swal.fire({
                title: "Sucesso",
                text: "Mensagem enviada com sucesso!",
                icon: "success"
            });
        }
    }

    return (
        <section className={styles.contact} id="contato">
            <form onSubmit={handleSubmit}>
                <h2>Fale Conosco</h2>
                <div className={styles.inputBox}>
                    <label>Nome completo</label>
                    <input type="text" className={styles.field} placeholder='Insira seu nome' required name='name' />
                </div>
                <div className={styles.inputBox}>
                    <label>Email</label>
                    <input type="email" className={styles.field} placeholder='Insira seu email' required name="email" />
                </div>
                <div className={styles.inputBox}>
                    <label>Mensagem</label>
                    <textarea name="message" id="" className={styles.fieldMess} placeholder='Insira sua mensagem' required></textarea>
                </div>
                <button type='submit'>Enviar mensagem</button>
            </form>
        </section>
    )
}