import styles from "~/styles/funcionalidades.module.css"
export function Funcionalidades() {
    return (
        <div className={styles.tituloFunc}>
            <h1><span className={styles.greyText}>Conheça</span> <span className={styles.blueText}>todas as funcionalidades <span className={styles.greyText}>que oferecemos!</span></span></h1>
        </div>
    )
}