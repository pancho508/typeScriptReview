enum Role {ADMIN, READ_ONLY, AUTHOR} // This is a way to create a custom type

// const person: object = { //always use lowercase for TS types
const person: { //tells TS that its an object and will be specific about the type of the object props
    name: string;
    age: number;
    // morral: any[]; // This is a way to tell TS that the array can have any type of data
    morral: string[];
    // role: [number, string]
    role: Role.ADMIN
} = {  
    name: 'pancho', 
    age: 30,
    morral: ['laptop', 'mouse', 'charger'],
    // role: [2, '2b or not 2b'], // This is a way to tell TS that the array can have any type of data
    role: Role.ADMIN,
} // This is an object that TS sees with two props infering the type of each prop: string and number


for(let item in person.morral){
    console.log(item);
}
// person.role.push('admin'); // no bueno, tuples are exceptions to the rule for pushing 
// person.role[1]= 4
console.log('tupel should not change: ', person.role)

type Combinable = number | string; // This is a way to create a custom type

const product:{
    id: Combinable;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
  } = {
    id: '002',
    price: 13.37,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Mole Rojo',
      description: 'Uno de los mejores moles de Pueblita la bella'
    }
  }

console.log('Producto: ', product)