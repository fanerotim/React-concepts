export const Button = ({ callback, children }) => {

    return (
        <button
            onClick={callback}
        >
            {children}
        </button>
    )
}