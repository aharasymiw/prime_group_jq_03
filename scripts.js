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
  var c = 0;
  var pods = {};
  var numOfPeeps = students.length / podSize;
  var leftOverPeeps = students.length % podSize;

  while(podNums <= podSize){
    addPeeps();
  }

  remainders();

  function addPeeps(){
    var pod = [];
    
    for (var i = 0; i < numOfPeeps - 1; i++){
      pod.push(shuffledStudents[c]);
      c++;
    }
    
    pods["pod" + podNums] = pod;
    podNums++;
  }

  function remainders(){
    for(var i = 1; i <= leftOverPeeps; i++){
      pods["pod" + i].push(shuffledStudents[c]);
      c++;
    }
  }
  
  console.log(pods);
  return pods;                                                        
}

function podAppender(podHolder, numPods) {
  $('main > *').remove();
  for (var p = 1; p <= numPods; p++)
  {
    var $ul = $('<ul>');
    $('main').append($ul);
    podHolder["pod" + p].forEach(function(elem) {
      var $li = $('<li>').append(elem);
      $ul.append($li);
    });
  }
}

function podButton(){ 
  $('button').on('click', function(){
    var numPods = $('select').val();
	  var podHolder = podMaker(students, numPods);
    podAppender(podHolder, numPods);
    $('select').val("0");
  });
}


$(function() {

  podButton();	

});