export const generateItems = (numberOfItems) => {
    console.log('RE-RENDERED')
    
    const itemsToRender = [];

    for (let i = 0; i < numberOfItems; i++) {
        itemsToRender.push(i);
    }

    return itemsToRender;
}