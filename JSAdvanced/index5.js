// Section 5: The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?


let car = {

    make: "Porsche",
    model: '911',
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`)
    }
}


// car.description(); //works
// setTimeout(car.description, 200); //fails


// a) Fix the setTimeout call by wrapping the call to car.description() inside a
//    function
// b) Change the year for the car by creating a clone of the original and overriding it
// c) Does the delayed description() call use the original values or the new values from
// b)? Why?
// d) Use bind to fix the description method so that it can be called from within
//    setTimeout without a wrapper function
// e) Change another property of the car by creating a clone and overriding it, and test that
//    setTimeout still uses the bound value from d)

//The why
//setTimeout will return 'this' as undefined because it doesnt have a car in the car.description to pull the information from.


//A

setTimeout(() => car.description(), 200)


//B

let carG = {...car, year: 1975}

carG.description()


//C

// No it will not override it since the clone we are calling has a different name and that is the one that has had the values changed.
// carG.description()


//D

setTimeout(car.description.bind(car), 1000)


//E

let carModel = {...car, model: '992'}

carModel.description()

setTimeout(car.description.bind(car), 1000)