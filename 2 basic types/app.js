var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // This is a way to create a custom type
// const person: object = { //always use lowercase for TS types
var person = {
    name: 'pancho',
    age: 30,
    morral: ['laptop', 'mouse', 'charger'],
    // role: [2, '2b or not 2b'], // This is a way to tell TS that the array can have any type of data
    role: Role.ADMIN,
}; // This is an object that TS sees with two props infering the type of each prop: string and number
for (var item in person.morral) {
    console.log(item);
}
// person.role.push('admin'); // no bueno, tuples are exceptions to the rule for pushing 
// person.role[1]= 4
console.log('tupel should not change: ', person.role);
var product = {
    id: '002',
    price: 13.37,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Mole Rojo',
        description: 'Uno de los mejores moles de Pueblita la bella'
    }
};
console.log('Producto: ', product);
