function choice(arr) {
    let randomInex = Math.floor(Math.random() * arr.length);
    return arr[randomInex];
}

export {choice};
