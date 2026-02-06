export const getActivity = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        return response.json();
    } catch (error) {
        return null
    }
}