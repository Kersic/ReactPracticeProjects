function Choice(array) {
    return array[Math.floor(Math.random()*array.length)]
}

function Remove(item, array) {
   for(let i = 0; i < array.length; i++){
       if(array[i] === item){
           return [ ...array.slice(0,i), ...array.slice(i+1)]
       }
   }
}

export {Choice, Remove}
