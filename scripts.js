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
function Pod(){
	
}

function podMaker(numPods) {
  var podArray = [];
  for (var i = 0; i < numPods; i++){
	  var pod + i = new Pod();
  }
}


function podButton(){ 
  $('button').on('click', function(){
    var numPods = $('select').val();
	podMaker(numPods);
	$('select').val("0");
  });
}


$(function() {
  podButton();	
});