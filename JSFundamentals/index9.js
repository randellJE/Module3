// Section 9: Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent


let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

moreSports.push('Basketball')
moreSports.unshift('Football')

// let moreSports = teamSports;

let dog2 = dog1;
dog2 = 'Teddy';

let cat2 = 'cat1';
cat2.name = 'Skippy';

// dog1 was not changed. A new string was created only with the same value.
//cat1 was changed. The object pointing to it was modified.


let moreSports = [...teamSports];
moreSports.push("Baseball");
moreSports.unshift("Football");

let cat2 = { ...cat1 };
cat2.name = "Skippy";
cat2.breed = "Siberian";