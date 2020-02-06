
function favMovie(movie = "The room", name = "World"){
    console.log(`My name is ${name} and my favorite movie is ${movie}`)
}

favMovie()

let favmovie = (movie,name) => console.log(`My name is ${name} and my favorite movie is ${movie}`)
favmovie("true", "hard")

let getFirstName = (fullname) => console.log(`${fullname.split(' ', 1)}`)
getFirstName("Cesar Juarez");

let twoparams = (x,y) => ({
    exponent: Math.pow(x,y),
    product: x*y,
})
let {exponent, product} = twoparams(25,6);
console.log(`The exponent is ${exponent} and the product is ${product}`)

let threeparams = (name, location, favFood) => console.log(`${name}, ${location}, ${favFood}`);
let arr = ["Cesar", "classroom", "chicky nuggies"];
threeparams(...arr)

let name = "Cesar Juarez";

let oneparam = param => {
    let array = [...param]
    for (let i = 0; i < array.length ; i++){
        console.log(array[i]);
    }
} 

oneparam("Childish Gambino")