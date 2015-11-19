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
  while(podNums <= podSize){
    addPeeps();
  }

  function addPeeps(){
    var pod = [];
    
    for (i = 0; i < numOfPeeps - 1; i++){
      pod.push(shuffledStudents[i]);
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