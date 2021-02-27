import { useContext, useEffect, useState } from 'react'

import styles from '../styles/components/CountDown.module.css'
import { ChallengesContext } from './../contexts/ChallengesContext';

let countdownTimeout: NodeJS.Timeout;

export function CountDown() {
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1 * 60)  //25 minutos em 60 segundos
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('') //Tranforma em string, se não tiver dois caracteres preenche com um 0 e depois corta eles
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountDown() {
        setIsActive(true)

        if (!isActive) {
            clearTimeout(countdownTimeout)
        }
    }
    function resetCountDown() {
        setIsActive(false)
        clearTimeout(countdownTimeout)
        setTime(0.1 * 60)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000); //executa uma funação após segundo (1000 milisegundos)
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])

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

            { hasFinished ? (
                <button
                    disabled
                    className={styles.countDownButton}
                >
                    Ciclo Encerrado
                </button>
            ) : (
                    <>
                        {
                            isActive ? (
                                <button
                                    type="button"
                                    className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                                    onClick={resetCountDown}
                                >
                                    Abandonar Ciclo
                                </button>
                            ) : (
                                    <button
                                        type="button"
                                        className={styles.countDownButton}
                                        onClick={startCountDown}
                                    >
                                        Iniciar um ciclo
                                    </button>
                                )
                        }
                    </>
                )}


        </div>
    )
}