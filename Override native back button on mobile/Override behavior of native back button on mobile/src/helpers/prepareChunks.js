export const prepareChunks = (arr) => {
    const CHUNK_SIZE = 5;
    
    const chunksOfData = arr.reduce((acc, _, i) => {

        if (i % CHUNK_SIZE === 0) {
            acc.push(arr.slice(i, i + CHUNK_SIZE))
        }
        
        return acc;
    }, [])

    return chunksOfData;
}