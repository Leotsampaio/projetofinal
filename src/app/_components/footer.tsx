import styles from "~/styles/footer.module.css";

export function Footer(){
    return(
        <nav className={styles.footer}>
            <div className={styles.sobre}>
                <ul className={styles.links}>
                <li><strong>Mais informações</strong></li>
                    <li><a href="https://www.instagram.com/structunb/">Instagram</a></li>
                    <li><a href="https://struct.unb.br/">Site struct</a></li>
                    <li><a>Ajuda</a></li>

                </ul>
            </div>
            <div className={styles.easyStockFooter}>
                <h1>easyStock</h1>
            </div>
        </nav>



    );

};