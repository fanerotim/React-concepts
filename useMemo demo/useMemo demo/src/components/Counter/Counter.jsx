import styles from './Counter.module.scss';

export const Counter = ({ count }) => {
    return (
        <div
            className={styles.counter__container}
        >
            <p
                className={styles.counter__container__heading}
            >
                I am the counter
            </p>
            <p
                className={styles.counter__container__counter}
            >
                {count}
            </p>
        </div>
    )
}