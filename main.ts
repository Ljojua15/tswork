//1.გამოაცხადეთ ცვლადი "userInput" რომელსაც მიანიჭებთ მხოლოდ „number"-სა და „string"-ს.
//შექმენით ფუნქცია processinput(), რომელიც მიიღებს user input -ს.
//თუ user input რიცხვია, კონსოლში გამოვიტანოთ ლუწია თუ არა.
//b. თუ სტრინგი, მაშინ მისი სიგრძე

let userInput: number | string = 1;

function processinput(userInput: string | number) {
  if (typeof userInput === "number") {
    console.log(userInput % 2 === 0 ? "ლუწი" : "კენტი");
  } else {
    console.log(userInput.length);
  }
}

// processinput(userInput);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.
