import styles from "~/styles/nav.module.css";

export function Nav() {
    const scrollToSection = (id: any) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <nav className={styles.navBar}>
            <div className={styles.navLogo}>
                <img src="/images/logopf-removebg-preview.png" alt="" />
            </div>
            <div className={styles.navRight}>
                <ul className={styles.navLinks}>
                    <li><a onClick={() => scrollToSection('inicio')} >Início</a></li>
                    <li><a onClick={() => scrollToSection('funcionalidades')} >Funcionalidades</a></li>
                    <li><a onClick={() => scrollToSection('contato')} >Fale conosco</a></li>
                </ul>
                <button className={styles.btnLogin}>Login</button>
            </div>
        </nav>
    );
}