const apiURL = process.env.REACT_APP_API_URL;

const login = async (body) => {
    const response = await fetch(apiURL + "/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
}
export { login };