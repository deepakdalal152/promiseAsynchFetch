const animal = {
    legs: 4,
    tail:1,
    eyes:2
}

// let cat = Object.create(animal)
// cat.name = "Cat"
// cat.legs = 3



// function  Animal(name, height,animal)
// {
//     this.name = name
//     this.color = "red"
//     this.height = height + " feet"

//     this.legs = animal.legs
//     this.tail = animal.tail
//     this.eyes = animal.eyes
//     this.details = animal
//     this.arg = arguments
// }


// let dog = new Animal("Dog", 2,animal)
// dog.food = "paddigery"
// let tiger = new Animal("tiger", 5 ,animal)

// Animal.prototype.addLegs = function(animal)
// {
//     this.legs =animal.legs + animal.legs
// }
// Animal.prototype.onSell = function(value)
// {
//     this.onSell = value
// }
// tiger.onSell(false)

// dog.onSell(true)

// dog.addLegs(animal)


function myArr()
{
    this.length = arguments.length
    // Object.defineProperty(this,"length",{
        //     value :arguments.length,
        //     writable: true,
        //     enumerable: false
        // })

        // Object.defineProperty(this,"length",{
        //     value:arguments.length,
        //     writable:true,
        //     enumerable:false
        // })

    for(let i = 0; i < arguments.length; i++)
    {
        this[i] = arguments[i]
    }

}


myArr.prototype.push = function(value)
{
    this[this.length] = value;
    this.length++
}
myArr.prototype.pop = function()
{
    delete this[this.length -1];
    this.length--
}
myArr.prototype.top=function()
{
    return this[this.length-1]
}
myArr.prototype.print = function()
{
    let ars = []
    for(let i = 0; i<this.length; i++)
    {
        ars.push(this[i])
    }
    return ars
}
myArr.prototype.printReverse = function()
{
    let = ars = []
    for(let i = this.length -1; i >= 0;i--)
    {
        ars.push(this[i])
    }
    return ars
}
myArr.prototype.sizes = function()
{
    return(this.length)
}


var arr = new myArr(1,2,3,4,5,6)
arr.push(55)
arr.push(87)

arr.pop()

// for(var i = 0; i < dog.arg.length; i++)
{
    console.log(arr)
    console.log(arr.top())
    console.log(arr.sizes())
    console.log(arr.print())
    console.log(arr.printReverse())
}

var mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add('some text')

console.log(mySet.size); // 3