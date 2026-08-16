// const getDepartments = async () => {
//     const url = `${import.meta.env.VITE_API_BASE_URL}/departments`
//     const response = await fetch(url);
//     return await response.json();
// }

const getItem = async (objectId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/objects/${objectId}`
    const response = await fetch(url);

    if (response.status !== 200 || !response.ok) {
        console.log(response);
        throw Error('Network request failed. Please try again later.');
    }
    return await response.json()
}

const getAll = async (departmentId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/objects?departmentIds=${departmentId}`;
    const response = await fetch(url);
    return await response.json();
}

export {
    getDepartments,
    getItem,
    getAll
}