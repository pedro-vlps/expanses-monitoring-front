const apiURL = process.env.REACT_APP_API_URL;

const get = async (endpoint) => {
    const response = await fetch(apiURL + endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

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
export { login, get };