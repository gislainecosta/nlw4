import { useEffect, useState } from 'react'

import styles from '../styles/components/CountDown.module.css'

export function CountDown() {
    const [time, setTime ] = useState(25 * 60)  //25 minutos em 60 segundos
    const [active, setActive] = useState(false)

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('') //Tranforma em string, se não tiver dois caracteres preenche com um 0 e depois corta eles
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountDown(){
        setActive(true)
    }

    useEffect(() =>{
        if (active && time > 0){
            setTimeout(() => {
                setTime(time -1)
            }, 1000); //executa uma funação após segundo (1000 milisegundos)
        }
    }, [active, time])

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
    
                <button type="button" className={styles.countDownButton} onClick={startCountDown}>
                    Iniciar um ciclo
                </button>
        </div>
    )
}