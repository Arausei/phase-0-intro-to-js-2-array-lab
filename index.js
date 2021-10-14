let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()

}
function appendCat(name){
    return [...cats, name]
    
}
function prependCat(name){
    return [name, ...cats];    
}
function removeLastCat(){
    return cats.slice(0, cats.length-1)
} 
function removeFirstCat(){
    const newArray = cats.slice(1)
    return newArray
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}