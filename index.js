const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = function(){
  return tutorials.map(function(element){
    let newElement = "";
    newElement += element.charAt(0).toUpperCase();
    for(let i = 0; i < element.length; i++){
      
      if(element.charAt(i) !== ' '){
       newElement += element.charAt(i+1); 
      }
      else if(element.charAt(i) === ' '){
        newElement += element.charAt(i+1).toUpperCase();
      }
      else{
        newElement += element.charAt(i);
      }
    }
    console.log(newElement);
    return newElement;
  })
}
