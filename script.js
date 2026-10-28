// Assignment 4: JavaScript Objects, JSON, and Error Handling
// Open index.html in a browser and look at the console (F12).

// ---------------------------------------------------------
// Part A: Borrower object
// ---------------------------------------------------------
console.log("===== Part A: Borrower object =====");

const borrower = {
  id: "A12345",
  name: "Anna",
  age: 21,
  borrowedBooks: ["Dune", "The Hobbit", "The Left Hand of Darkness"],
};

// Add the email and one more book
borrower.email = "anna@example.com";
borrower.borrowedBooks.push("Neuromancer");

// Print a receipt with a loop
console.log("--- RECEIPT ---");
console.log("Name: " + borrower.name);
console.log("Email: " + borrower.email);
console.log("Borrowed books:");
for (let i = 0; i < borrower.borrowedBooks.length; i++) {
  console.log(i + 1 + ". " + borrower.borrowedBooks[i]);
}
console.log("Total number of books: " + borrower.borrowedBooks.length);

// ---------------------------------------------------------
// Part B: Books with a class
// ---------------------------------------------------------
console.log("\n===== Part B: Books with a class =====");

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
  }

  // Optional challenge: how old is the book
  getAge() {
    return new Date().getFullYear() - this.year;
  }
}

const book1 = new Book("Dune", "Frank Herbert", 1965);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book3 = new Book("The Left Hand of Darkness", "Ursula K. Le Guin", 1969);
const book4 = new Book("Neuromancer", "William Gibson", 1984);

const books = [book1, book2, book3, book4];

// Mark one book as unavailable
book2.isAvailable = false;

for (const book of books) {
  const status = book.isAvailable ? "available" : "not available";
  console.log(book.title + " - " + status);
}

// Optional challenge: print the age of each book
for (const book of books) {
  console.log(book.title + " is " + book.getAge() + " years old");
}

// ---------------------------------------------------------
// Part C: Loan data in JSON format
// ---------------------------------------------------------
console.log("\n===== Part C: JSON =====");

const jsonText = `[
{ "name": "Anna", "loans": 5 },
{ "name": "Matti", "loans": 3 },
{ "name": "Pertti", "loans": 1 },
{ "name": "Joni", "loans": 7 },
{ "name": "Miisa", "loans": 3 },
{ "name": "Matias", "loans": 8 },
{ "name": "Sara", "loans": 4 }
]`;

// JSON text -> JavaScript data
const loanData = JSON.parse(jsonText);

// Print the borrower names
console.log("Borrower names:");
for (const person of loanData) {
  console.log(person.name);
}

// Calculate the average number of loans
let totalLoans = 0;
for (const person of loanData) {
  totalLoans += person.loans;
}
const averageLoans = totalLoans / loanData.length;
console.log("Average loans: " + averageLoans.toFixed(2));

// JavaScript data -> JSON text
const backToText = JSON.stringify(loanData);
console.log("Back to JSON text:");
console.log(backToText);

// ---------------------------------------------------------
// Part D: Call stack analysis
// ---------------------------------------------------------
console.log("\n===== Part D: Call stack =====");

function printReceipt() {
  console.log("Receipt printed");
}

function registerLoan() {
  printReceipt();
}

function startLoan() {
  registerLoan();
}

startLoan();

// ---------------------------------------------------------
// Part E: Error handling
// ---------------------------------------------------------
console.log("\n===== Part E: Error handling =====");

// Returns a valid number of loan days or throws an error
function validateLoanDays(days) {
  if (typeof days !== "number" || Number.isNaN(days)) {
    throw new TypeError("Loan period must be a number, but got: " + days);
  }
  if (days < 1) {
    throw new RangeError("Loan period must be at least 1 day, but got: " + days);
  }
  if (days > 28) {
    throw new RangeError("Loan period can be at most 28 days, but got: " + days);
  }
  return days;
}

// Each test case has its own try...catch, so one error does not stop the others
try {
  const result = validateLoanDays(7);
  console.log("Valid loan period: " + result + " days");
} catch (error) {
  console.log("Handled error (" + error.name + "): " + error.message);
}

try {
  const result = validateLoanDays("abc");
  console.log("Valid loan period: " + result + " days");
} catch (error) {
  console.log("Handled error (" + error.name + "): " + error.message);
}

try {
  const result = validateLoanDays(0);
  console.log("Valid loan period: " + result + " days");
} catch (error) {
  console.log("Handled error (" + error.name + "): " + error.message);
}

try {
  const result = validateLoanDays(29);
  console.log("Valid loan period: " + result + " days");
} catch (error) {
  console.log("Handled error (" + error.name + "): " + error.message);
}

// Malformed invoice JSON (the quotes around KP break the JSON)
try {
  const invoice = JSON.parse(
    '{"invoiceNumber":"INV-1042","customerName":"Kroisos "KP" Pennonen","total":42}',
  );
  console.log(invoice);
} catch (error) {
  console.log(
    "The invoice data could not be read (" + error.name + "): " + error.message,
  );
}

console.log("\nAll parts finished, the program did not crash.");
