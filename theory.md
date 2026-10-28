# Theory reflections

## Part A: Objects

A JavaScript object is a collection of related data stored in named properties, so every value has a key. For example my borrower object has an id, a name, an age and a list of borrowed books. I can read a value with dot notation like borrower.name or with brackets like borrower["name"]. A property can hold any kind of value, even an array or another object, and I can add new properties later, like I did with the email.

## Part C: JSON

A JavaScript object is a real data structure inside the running program, so I can use it and change it directly. JSON is just text that describes data in a certain format, where the keys and string values must be in double quotes. Because it is only text, I have to turn it into an object with JSON.parse() before I can use it, and JSON.stringify() turns an object back into text. JSON is handy when data is saved or sent between programs.

## Part D: Call stack

1. While printReceipt() runs, the stack from bottom to top is: the global code (the whole program), startLoan, registerLoan and printReceipt on top.
2. When printReceipt() finishes, registerLoan resumes from the line after the call. The functions leave the stack in the order printReceipt, registerLoan, startLoan, so the last one in is the first one out.
3. Every function call adds a new layer on top of the stack. When a function returns or ends, its layer is removed from the top and the program goes back to the function below it.

## Part E: Error handling

Why catch and handle an error instead of letting execution stop? If I catch the error I can explain clearly what went wrong, reject the bad data or skip the broken record and keep going with the rest. Without that, one invalid value would stop the whole kiosk program, even when everything else is fine.

When is throwing better than if...else? Throwing is better when a function cannot do its job because a value breaks the rules, like a loan period of 29 days when the maximum is 28. Then the error moves up to the caller, who knows what to do with it. If...else is better for normal expected situations, like an empty list of books, where nothing actually went wrong.
