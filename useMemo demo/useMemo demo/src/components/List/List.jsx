export const List = ({ itemsToRender }) => {

    return (
        <>
            <ul>
                I am a simple UL
            

            {itemsToRender.map((i, index) => {
                return (
                    <li key={index}>New item</li>
                )
            })}

            </ul>
        </>
    )
}