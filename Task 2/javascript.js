var student = {
    name: "Farrukh Malik",
    sclass: "VI",
    rollno: "01"
}
// Length of the object
var count = Object.keys(student).length;

console.log("Length "+count);
//
console.log("----------------------------");
// Array of the keys from the object
var arr = [];

for(i=0; i<count; i++){

    arr[i] = Object.keys(student)[i];
console.log("Array of the keys "+arr[i]);
}
//

console.log("----------------------------");
// Delete the roll no from the object

console.log("Roll no: "+student.rollno);    
delete student.rollno;
console.log("Deleted "+student.rollno);
//