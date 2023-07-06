
async function showGitUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    const body = await response.json();
    if(response.status !== 200) {
        throw(Error(body.message));
    }
    return body;
}

showGitUser('dignat').then(user => {
    console.log(user)
}).catch(err => {
    console.error(`Error ${err.message}`);
})