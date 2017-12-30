export default (genre) => {
    return fetch(`http://192.168.0.102:8010/shows/${genre}`)
        .then(response => Promise.all([response, response.json()]))
}