var str = "we want to go to to to to karachi";

var count = 0;

for(var i =0; i< str.length; i++){

        var ch1 = str.charAt(i);

        var ch2 = str.charAt(i+1);

        if(ch1 == 't' && ch2 == 'o'){

            count++;

        }

}

alert(count);