// const person={
//     name:'Andrew',
//     age:26,
//     location:{
//         city:'Phil',
//         temp:92
//     }
// };
// console.log(`${person.name} is ${person.age}`);

// console.log(`${person.location.city} is ${person.location.temp}`);


// const {age,name}=person;
// console.log(`${name} is ${age}`);
// const {city,temp:temperature}=person.location
// console.log(`${city} is ${temperature}`);

// //Default destructuring
// const person2 = {
//     age: 26,
//     location: {
//         city: 'Phil',
//         temp: 92
//     }
// };

// const {name:person2name='Anon',age:age2}=person2;
// console.log(`${person2name} is ${age2}`);

// const person3 = {
//     name:'Andrew',
//     age: 26,
//     location: {
//         city: 'Phil',
//         temp: 92
//     }
// };
// const { name: person3name = 'Anon', age: age3 } = person3;
// console.log(`${person3name} is ${age3}`);



//Array


const address=['1299','Phil','Pennsylv','1922']
console.log(`you are in ${address[0]},${address[1]}, ${ address[2]}, ${ address[3]}`);

const [street,city,state,zip]=address;
const [street2,city2]=address;
console.log(`you are in ${street},${city}, ${ state}, ${ zip}`);
console.log(`you are in ${street2},${city2}`);
const [,,state2,zip2]=address;
console.log(`you are in ${state2},${zip2}`);
const [,,,,addr='Earth']=address;
console.log(`you are in ${addr}`)
