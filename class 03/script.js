// JSON support those data types of javascript. and they are...
// 1. string.
// 2. number. 
// 3. boolean.
// 4. array. 
// 5. Object. (JSON formate)
// 6. null. 
// JSON official website is   www.jsonlint.com
let student = {
    name : 'rahim',
    age : 20,
    isStudent : true,
    havingGF : null,
    greet: function(){
        console.log('welcome to json class')
    }
}
let ans = JSON.stringify(student)
console.log(ans)
// JSON will not support undifined , function, date type data .
03