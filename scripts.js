var students = [
  'Chris Arnesen',
  'Ashley Steele',
  'John Crimmings',
  'Charlotte Kroening',
  'Connor Klausing',
  'Adia Alderson',
  'Amanda Bausch',
  'Andrew Dourgarian',
  'Andrew Harasymiw',
  'Ben Margis',
  'Brandi Brown',
  'Clayton Hottinger',
  'Derek Roche',
  'Gwen Paul',
  'Keisha Josephs',
  'Kyra Crowston',
  'Moni Francesca',
  'Nicholas Gill',
  'Wallace Wylie',
  'James Kirwin',
  'Manuel Zumarraga',
  'Sam Richard'
];

Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

function podMaker(array, podSize) {
  var shuffledStudents = array.shuffle();
  var podNums = 1;
  var pods = {};
  var numOfPeeps = students.length / podSize;
  var keeper = numOfPeeps;
  podMaker();


  function podMaker(){
    var pod = [];
    for (var i = 0; i < students.length; i++){
      pod.push(shuffledStudents[i]);
      
      if (i % numOfPeeps){
        pods["pod" + podNums] = pod;
        podNums++;
        pod = [];
      }
      
    }
    pods["pod" + podNums] = pod;
    podNums++;


  }
  console.log(pods);
  return pods;
}

function podButton(){ 

  $('button').on('click', function(){
    var numPods = $('select').val();
	  podMaker(students, numPods);
    $('select').val("0");
  });
}


$(function() {

  podButton();	

});