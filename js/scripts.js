
  var to = prompt("Enter a number to count to");
  var countTo = parseInt(to);

	var by = prompt("Enter a number to count by");
  var countBy = parseInt(by);

  var total = 0;
  var answer = [];

  for( var i = countBy; total + i <= countTo; i + i) {
  total += i;
  answer.push(total);
  }
  alert(answer);
