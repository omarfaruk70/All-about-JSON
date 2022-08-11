// some basic example of json data formate.
// object data formate ------
let studentObject = {
    name : "Omar Faruk",
    age : 20,
    isStudent : true,
    homeTown : 'Parshuram',
    country : "Bangladesh"
};
// json data formate -------
let studentJson = {
    'name' : "Omar Faruk",
    'age'  : 20,
    'isStudent' : true,
    'homeTown' : 'Parshuram',
    'country' : "Bangladesh"
};

//  js Object to json formate convert.
// if we need to convert a object to json file , we must use JSON.stringify() method.
//  lets clear with an example with friendObj to friendJSON ...
// obj data formate...
let friendObject = {
    name : 'Saiful Emon',
    age : 22,
    isStudent: true,
    homeTown: 'box-mahmud',
    country: 'Bangladesh'
};
// JSON data formate creating..
let friendJSON = JSON.stringify(friendObject);
console.log(friendJSON); // output shown is console.


// we can also creating json to object convert
// we must use JSON.parse() method to convert a json data to object data.
let friendNew = JSON.parse(friendJSON);
console.log(friendNew);