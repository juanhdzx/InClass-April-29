//Question 1 


const arrowMyFunction = (num1, num2) => { (num1 + num2); 
};
console.log(arrowMyFunction); 


// Question 2 

// const arrowAdd100 = (money) => { (money + 100); };
//  console.log(arrowAdd100);

 const arrowAdd100 = money => money + 100;
 console.log(arrowAdd100());


 // Question 3 

 function countLetters(name, letter) 
 {
     var letterCount = 0;
     for (var position = 0; position < name.length; position++)
 {
      if (name.charAt(position) == letter)
      {
          letterCount += 1;
      }
    }
    return letterCount;
}
console.log(countLetters('Hello my name is Johnathan', "n"));



 
