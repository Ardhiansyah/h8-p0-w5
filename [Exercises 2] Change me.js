function changeMe(arr) {
  if (arr.length != 0) {
  	var year = new Date().getFullYear();

  	for (var i = 0; i < arr.length; i++) {
  		var age = '';
  		if (!arr[i][3]) {
  			age = 'Invalid Birth Year';
  		} else {
  			age = year - arr[i][3];
  		}
  		
  		var personObj = {
  			firstName: arr[i][0],
  			lastName: arr[i][1],
  			gender: arr[i][2],
  			age: age
  		};
  		console.log(i+1 + '. ' + arr[i][0] + ' ' + arr[i][1] + ':');
  		console.log(personObj);
  	}
  } else {
  	console.log('');
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""