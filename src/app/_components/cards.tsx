import styles from '~/styles/cards.module.css'
import React, { useState } from "react"
export function Cards() {
    const [cards] = useState([
        {
            title: 'Dashboard de Administração',
            text: 'A Dashboard de Administração oferece uma visão abrangente das operações comerciais chave. Na página inicial, você encontrará um resumo das atividades recentes da sua empresa, incluindo vendas e atualizações importantes. Além disso, há um acompanhamento detalhado do estoque atual para melhor gestão de inventário. Os produtos mais e menos vendidos são destacados, permitindo uma análise rápida das tendências de vendas e um insight valioso para estratégias futuras.',
        },
        {
            title: 'Gerencimento de Estoque',
            text: 'O sistema de gerenciamento de estoque proporciona uma solução abrangente para controlar todos os aspectos relacionados aos produtos da empresa. Ele permite visualizar detalhes completos de cada item, incluindo descrição, preço e quantidade disponível. Além disso, facilita a adição de novos produtos, remoção de itens obsoletos e a edição de informações existentes, garantindo uma gestão eficiente que otimiza os processos logísticos e assegura um estoque bem gerido para atender às demandas do negócio de forma precisa e oportuna.',
        },
        {
            title: 'Página de Extrato',
            text: 'O sistema registra todas as transações de entrada e saída de forma detalhada, permitindo filtrar por produto específico ou período de tempo. Isso proporciona uma visão clara e organizada das movimentações de estoque, facilitando a análise de vendas, reposições e fluxos financeiros associados, essenciais para uma gestão estratégica e eficiente do inventário.',
        },
        {
            title: 'Página de Visualização de Estoque',
            text: 'O sistema permite que usuários comuns visualizem todos os produtos disponíveis no estoque e consultem informações detalhadas sobre cada um. Além disso, eles têm a capacidade de reduzir a quantidade de produtos disponíveis, facilitando a gestão de solicitações de retirada ou utilização interna de itens. Essa funcionalidade promove uma maior transparência e eficiência na operação, permitindo que todos os envolvidos tenham acesso às informações necessárias para suas atividades cotidianas.',
        },
        {
            title: 'Níveis de Acesso',
            text: 'O sistema será desenvolvido com diferentes níveis de acesso para atender tanto aos administradores quanto aos usuários comuns. Os administradores terão permissões amplas para gerenciar todos os aspectos do sistema, incluindo adicionar, editar e excluir produtos, além de acessar relatórios detalhados e configurações avançadas. Por outro lado, os usuários comuns terão acesso restrito às funcionalidades, como visualização de produtos disponíveis, consulta de informações detalhadas e possivelmente a capacidade de fazer solicitações específicas, dependendo da configuração do sistema',
        },
        {
            title: 'Atendimento Personalizado',
            text: 'O sistema oferece um atendimento dedicado e personalizado para todos os usuários, independentemente do seu nível de acesso. A equipe de suporte está disponível para responder prontamente às necessidades dos usuários, oferecendo assistência técnica especializada, orientações detalhadas sobre funcionalidades e resolução eficiente de problemas. Esse compromisso com um atendimento de qualidade visa garantir uma experiência positiva e satisfatória, promovendo a confiança e a eficiência no uso do sistema para todos os envolvidos.',
        },

    ])

    return (
        < div >
            <section className={styles.section} id="funcionalidades">
                <div className={styles.containerFunc}>
                    <h1>Conheça todas as nossas funcionalidades!</h1>
                    <div className={styles.containerCards}>
                        {cards.map((card, i) => (
                            <div key={i} className={styles.card}>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    )
}