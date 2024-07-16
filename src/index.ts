let sales: number = 123;
let course: string = "TypeScript";

let is_published: boolean = true;

function render(document: any) {
  console.log(document);
}

// //!ARRAY

let numbers: number[] = []; //number;
numbers[0] = 10;
numbers[1] = "1";

numbers.forEach((n) => console.log(n));

//!TUPLES prikaze 2 vrednosti v arrayu

let user: [number, string] = [1, "2"];

//!ENUMS prikažemo neko listo konstant, če dodamo const enum js compiler prikaže bolj optimizirano kodo

const small = 1;
const medium = 2;
const large = 3;

const enum Size {
  Small = 0,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;

console.log(mySize);

//!FUNCTIONS
//! enablali smo nounsed parameters in no implicit return da nam javi napake če ni drugega returna ali če income ni definiran
//!
function calculateTax(income: number, taxYear = 2022): number {
  if ((taxYear || 2000) < 50_000) return income * 2;
  return income * 1.3;
}

//! če napišemo taxyear parameter overajte default value definiran v funkciji drugače pa vseno nevrže errorja ven
calculateTax(10_000, 2022);

//!OBJECTS

type Employe = { id: number; name?: string; retire: (date: Date) => void };

let employe: Employe = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

//!UNI0N TYPES

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");

//!INTERSECTION združi obe stvari skupaj sepravi draggable in resizable

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//!LITERAL TYPES
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "m" | "cm" | "mm";

//!NULL VALUES
//!ce poklicemo funkcijo z stringom ali null nevrne napake drugače jo!

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}
greet(undefined);
