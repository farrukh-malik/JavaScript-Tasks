var students = [
    {
        _id: 'std1',
        name: 'Bill gates',
        age: '25'
    },
    {
        _id: 'std2',
        name: 'Steve jobs',
        age: '27'
    },
    {
        _id: 'std3',
        name: 'Mark Zukerberg',
        age: '65'
    }
];

var courses = [
    {
        name: 'maths',
        std_id: ['std3' , 'std1']
    },
    {
        name: 'Computer Science',
        std_id: ['std3' , 'std2']
    },
    {
        name: 'Commerce',
        std_id: ['std1']
    }
];

var arr = [];

for(var i=0; i<students.length; i++){
var ids =  students[i]._id;
// console.log(ids);

obj ={id: ids, name:students[i].name, course: courses};

arr.push(obj);
// console.log(arr[i].name+" "+arr[i].id+" "+arr[i].course[i].std_id[i]);

}

console.log(arr.toString());