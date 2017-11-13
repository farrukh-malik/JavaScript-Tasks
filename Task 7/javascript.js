var a = [1, 2, 3, 4, 5, 6];


var sum = 0;
var lastIndex = a.length;

sumfunc(0);

function sumfunc(initial) {


    if (initial >= lastIndex) {
        // console.log(sum);

        alert(sum);
        return;

    }

    sum += a[initial];

    initial += 1;

    return sumfunc(initial);


}