import styles from "~/styles/home.module.css";
export function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeText}>
                <h1>easyStock</h1>
                <h2>O sistema que simplifica o seu estoque.</h2>
                <p>Na easyStock, oferecemos um sistema de controle de estoque eficiente que simplifica a gestão dos seus produtos.</p>
            </div>
            <div className={styles.imgHome}>
                <img src="/images/imgHomedef.png" alt="img" />
            </div>
        </div>
    );
}