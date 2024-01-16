//assignment 1:
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(0, 1)
fruits.push('grape')
fruits.splice(1, 1, 'pear')
console.log(fruits);

//assignment 2:
let person = {name: 'john', age:30, city:'Newyork'}
delete person.age
person.job = ('engineer')
person.city= 'sanfransico'
console.log(person)

//assignment 3:

let cars = [{make: 'Toyota', model: 'camry', year: 2018},
{make: 'Toyota', model: 'camry', year: 2018},{make: 'Toyota', model: 'camry', year: 2018}]
cars.splice(0, 1)
cars.push({make: 'Honda', model: 'civic', year: 2020})
cars[1].model='accord'
console.log(cars)