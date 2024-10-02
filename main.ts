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

//2. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს, გამოთვლის ელემენტების ჯამს და დააბრუნებს ამ მნიშვნელობას.

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumNumbers(numbers: number[]) {
  let sum = 0;
  numbers.forEach((x) => (sum += x));

  return sum;
}
console.log(sumNumbers(numbers));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3.შექმენით ფუნქცია, რომელიც გამოგითვლით მარკუთხედისა ან კვადრატის პერიმეტრს. თუ გადასცემთ ორ პარამეტერს, გამოთვალოს მარკუთხედის პერიმეტრი, ერთის შემთხვევაში კი კვადრატის.
//კლასები - შეეცადეთ ინტერფეისები და კლასები ცალკე ფაილებად დაყოთ, როგორც სემინარზე

function calcPer(x: number, y?: number): number | undefined {
  if (x > 0 && y !== undefined && y > 0) {
    return 2 * x + 2 * y;
  } else if (x > 0 && y === undefined) {
    return 4 * x;
  }
  return undefined;
}

console.log(calcPer(2, 5));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. შექმენით Person კლასი, რომელსაც ექნება სახელი, გვარი, ასაკი, სასწავლებელი. კონსტრუქტორში გადაეცით 4ივე მონაცემი, თუმცა, თუ სასწავლებელს
// არ მიუთითებთ თავისით „AlgoUni“ მიანიჭოს. ამის მერე კლასში შექმენით Person კლასის ინსტანსი, და კონსოლში გამოიტანეთ ყველა მონაცემი.

class Person {
  name: string;
  surName: string;
  age: number;
  uni?: string;

  constructor(name: string, surName: string, age: number, uni?: string) {
    this.name = name;
    this.surName = surName;
    this.age = age;
    this.uni = uni;
  }
  showInfo(): void {
    console.log(
      `სახელი: ${this.name}, გვარი: ${this.surName} ასაკი: ${
        this.age
      } სასწავლებელი: ${this.uni ? this.uni : "ალგო-უნი"}`
    );
  }
}

const person1 = new Person("lasha", "jojua", 2);

person1.showInfo();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5.გაქვთ მომხმარებლების სია, თითოეული შეიცავს ინფორმაციას პირის სახელის, ასაკისა და პროფესიის შესახებ. განსაზღვროთ მომხმარებლის ინტერფეისი,
//რომლითაც შექმნით უზრუნველყოთ ტიპის უსაფრთხოებასა და დაცულ სტრუქტურას და შეძლებთ ამ მომხმარებლების ფუნქციაში გადაცემას.

interface User {
  name: string;
  age: number;
  occupation: string;
}

const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

function logPerson(user: User): void {
  console.log(
    `სახელი:${user.name} ასაკი:${user.age} occupation:${user.occupation}`
  );
}

//users.forEach(logPerson);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//6.კვლავ გვაქვს მომხმარებლების სია, მაგრამ ახლა გვემატება ადმინიც. შექმენით ისეთი ტიპი, რომელიც მომხმარებელსაც და ადმინსაც შეინახავს.
interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

const persons: (User | Admin)[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

function logPerson2(user: User | Admin): void {
  console.log(typeof user);
  if ("role" in user) {
    console.log(`სახელი: ${user.name}, ასაკი: ${user.age}, ${user.role}`);
  } else {
    console.log(`სახელი: ${user.name}, ასაკი: ${user.age}, ${user.occupation}`);
  }
}
persons.forEach(logPerson2);
