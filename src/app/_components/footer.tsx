import styles from "~/styles/footer.module.css";

export function Footer(){
    return(
        <nav className={styles.footer}>
            <div className={styles.easyStockFooter}>
                <h1>easyStock</h1>
            </div>
            <div className={styles.sobre}>
                <ul className={styles.links}>
                <li><strong>Contatos</strong></li>
                    <li>EasyStock@unb.br.com</li>
                    <li>(61)9 8765-12345</li>
                    

                </ul>
            </div>
            <div className={styles.sobre}>
                <ul className={styles.links}>
                <li><strong>Redes Sociais</strong></li>
                    <li><a href="https://www.instagram.com/structunb/">Instagram</a><img src="/images/Instagram-Icon.png"/></li>
                    <li><a href="https://www.facebook.com/StructUnB/?locale=pt_BR">Facebook</a><img src="/images/Facebook_Logo_2023.png"/></li>
                    <li><a href="https://www.youtube.com/@structunb">Youtube</a><img src="/images/1384060.png"/></li>

                </ul>
            </div>
            
            
        </nav>



    );

};