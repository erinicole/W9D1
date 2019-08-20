Function.prototype.inherits = function(Subclass, SuperClass){
  function Surrogate(){}
  Surrogate.prototype = SuperClass.prototype;
  Subclass.prototype = new Surrogate();
  Subclass.prototype.constructor = Subclass;
  
};

function MovingObject(color) {
  this.color = color;
 }

function Ship(color) { 
  MovingObject.call(this, color);

 
}
Ship.inherits(Ship, MovingObject);

function Asteroid(color) { 
  MovingObject.call(this, color);

}
Asteroid.inherits(Asteroid, MovingObject);

let thing = new MovingObect("blue");
console.log(thing);


