
//exercise 1//
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


                console.log(currentdate)
                console.log(datetime)

var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  console.log('Good Morning')
} else if (curHr < 18) {
  console.log('Good Afternoon')
} else {
  console.log('Good Evening')
}


//exercise 3//
for (var i=0; i < 5; i++) {
  console.log("#".repeat(i+1))
}

//exercise 4//
var hash = "#";
var space = ' ';
var size = 8;

for (var x = 1; x <= size; x++) {
  var line = ' ';

  for (var y = 1; y <= size; y++) {
    if (x % 2) {
      if (y % 2) {
        line = line + space;
      } else {
        line = line + hash;
      }
    } else {
      if (y % 2) {
        line = line + hash;
      } else {
        line = line + space;
      }
    }

  }

  console.log(line);
}
