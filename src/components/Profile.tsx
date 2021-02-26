import styles from '../styles/components/Profile.module.css'


export function Profile( ) {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/gislainecosta.png" alt="Foto de Perfil"/>
            <div>
                <strong>Gislaine Costa Pereira</strong>
                <p>
                    <img src='icons/level.svg' alt='Icone de level'/>
                    Level 1</p>
            </div>
        </div>
    )
}