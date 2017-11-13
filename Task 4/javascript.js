var arr =[
    {name:'Sarfaraz', age:22},
    {name:'Asif', age:48},
    {name:'Farrukh', age:23},
    {name:'Sara', age:12},
    {name:'Atif', age:20},    
];

var newArr = [];

for(i=0; i<arr.length; i++){

    if(arr[i].age>=18 && arr[i].age<=28 && arr[i].name.indexOf('f') != -1){

        newArr.push(arr[i].name);

    }
}

console.log(newArr.toString());