import styles from "~/styles/nav.module.css";

export function Nav() {
    return (
        <nav className={styles.navBar}>
            <div className={styles.navLogo}>
                <img src="/images/logopf-removebg-preview.png" alt="" />
            </div>
            <div className={styles.navRight}>
                <ul className={styles.navLinks}>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#funcionalidades">Funcionalidades</a></li>
                    <li><a href="#contato">Fale conosco</a></li>
                </ul>
                <button className={styles.btnLogin}>Login</button>
            </div>
        </nav>
    );
}