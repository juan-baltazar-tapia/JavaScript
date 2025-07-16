// Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more 
// elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys,
//  "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's fu
//  ll name, an
// d mentions the person's title.

function greetings(array, object){
    let fullName = array[0];
    for (let i = 1; i<array.length; i++){
        fullName = fullName + " " + array[i]
    }
    return(`Hello ${fullName}! Nice to have a ${object.title} ${object.occupation} around.`)
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

// logs Hello, John Q Doe! Nice to have a Master Plumber around.