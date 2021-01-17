const circle = {
    radius:1,
    location:{
        x:1,
        y:1
    },
    draw(){
        console.log('draw');
    }
}
circle.draw();

//factory
function createCircle(radius){
return {
    radius,
    draw(){
        console.log('draw'); 
    }
};
}
const circle = createCircle(1);

//contructor

function Circle(radius){
this.radius = radius;
this.move=function(){
    console.log('move');
    this.draw();
}

}
const circle1 =new Circle(1);
Circle.prototype.draw = function(){
    
    console.log('draw',this.radius);   
}

//adding or removing property
another.name = 'durgesh';

//enumeration property
for(let key in another){
    if(typeof another[key] !== 'function')
    console.log(key,another[key]);
}

let keys = Object.keys(another);
console.log(keys);

let values = Object.values(another);
console.log(values);
const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(another)) {
    console.log(`${key}: ${value}`);
  }


//value vs reference
let a={value:10};
let b = a;
a.value=20;
let obj = {value:10};
function increment(obj){
obj.value++;
}
increment(obj);

//private property and method

//getter and setter
function Person(name){
    let age=40;
    this.name = name;
    const getAge = function(){
        return age;
    }
    this.getName = function(){
        return this.name + ' ' +getAge();
    }
    Object.defineProperty(this,'age',{
        get:function(){
            return age;
        },
        set:function(value){
            if(typeof value === 'string') throw new Error('please assign number');
        }
    })
}
const durgesh = new Person('durgesh');

//prototype
function Extends(Child,Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constuctor=Child;
}
function Shape(color){
this.color = color;
}


function Circle(radius,color){
    Shape.call(this,color);
    this.radius = radius;
}
Extends(Circle,Shape);
Circle.prototype.duplicate = function(){
    //Shape.prototype.duplicate.call(this);
    console.log('circle duplicate');
}
Circle.prototype.draw = function(){
    console.log('draw');
}
Shape.prototype.duplicate = function(){
    console.log('duplicate');
}
function Squar(size){
    this.size = size;
}
Extends(Squar,Shape);
Squar.prototype.duplicate = function(){
    //Shape.prototype.duplicate.call(this);
    console.log('Squar duplicate');
}
const c = new Circle(1,'red');
const s = new Shape();
const sq = new Squar(5);

//polymorphism

const shapes = [
    new Circle(1,'red'),
    new Squar(10)
];
for(let shape of shapes) console.log(shape.duplicate());

//composition
function mixins(target,...source){
Object.assign(target,...source);
}
const canWalk={
    walk(){
        console.log('walk');
    }
}
const canEat={
    eat(){
        console.log('eat');
    }
}
const canSwim = {
    swim(){console.log('swim');}
}
function Person(){}
mixins(Person.prototype,canEat,canWalk);
const person = new Person()
console.log(person);
function GoldFish(){

}
mixins({},canEat,canSwim);
const goldFish = new GoldFish();
console.log(goldFish);

// e.g
function HtmlElement(){
    this.click=function(){
        console.log('click')
    }
}
HtmlElement.prototype.focus = function(){
    console.log('focus');
}
function HtmlSelectElement(items=[]){
    this.items = items;
    this.addItem=function(item){
        this.items.push(item);
    }
    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item),1)
    }
    
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constuctor = HtmlSelectElement;
const he = new HtmlSelectElement();


//es6 class

class Circle{
    constructor(radius){
        this.radius = radius;
        this.run=function(){
            console.log('run');
        }
    }
    draw =()=>{
        console.log('draw1');
    }
}
const c= new Circle(5);


