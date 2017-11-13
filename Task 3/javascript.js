var arr  = [
    {name: 'Asher' , age:22},
    {name: 'Zubair' , age:20},
    {name: 'Kashif' , age:23},
    {name: 'Wasif' , age:17},
    {name: 'Hanzala' , age:28},

];

// Replace the 3rd index

arr[2].name= 'Sadiq';
arr[2].age = 23;

// Push from the end
arr.push({name:'Umair', age:23});

// Remove 1st element
arr.shift();

// Add a field
for(i=0; i<arr.length; i++){
    arr[i].CreatedAt = new Date();
}

for(i=0; i<arr.length; i++){

console.log(arr[i].name+" "+arr[i].age+" "+arr[i].CreatedAt);
}
