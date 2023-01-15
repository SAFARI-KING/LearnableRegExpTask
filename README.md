# LearnableRegExpTask

- `regexp.js` is a sample solution for Learnable RegExp Task.
- `LEARNABLE-REGEXP-TASK` is a simple credit card validation console app.
- **REQUIREMENTS**

```
1. 16 digits card number
2. card expiry date
3. card type
```

## USAGE

- clone the repo and cd into the directory such that you are on `LEARNABLE-REGEXP-TASK`
- To run solution, make sure you have [nodejs](https://nodejs.org/en/download/) and NPM installed
- use the following command terminal

```
# Run npm install prompt-sync

npm install prompt-sync
```

```
# Run node regexp.js

node regexp.js
```

### SAMPLE

> <sub>_Make sure your current file is `regexp.js`_</sub>

- Install and use code runner in your vscode and RUN
- You should see a prompt in your terminal

```
# Terminal

16 Digits Card Number: |
```

- Type your response and follow the instructions carefully to avoid errors.
- If you did everything correctly

```
# possible outcome
*************************

Hey!👋👋👋

Card: 1234567890123456
Expiry Date: 01/23
Type: VISA

Your Details Are Valid!🎉

```

### REGEX PATTERNS USED

- **`cardNumber` Pattern** test for values that begins and ends with a digit and must not be greater or less than 16 characters.
- **`cardExDate` Pattern** <sub>testing for the month and year in this format _01/23 (representing january 2023)_</sub>, it test for values that begins with a digit and ends with a digit, it checks if the first 2 characters are not greater than 12 _(representing how many months are in a year)_ and not less than 1, followed by a '/', then if the last 2 characters are not less than 23 _(representing our current year 2023)_ and not greater than 99 _(2099)_, this patterns test for a total of 5 characters only.
- **`cardType` Pattern** test if values are equal to a set of strings (VISA|EXPRESS|MASTERCARD|VERVE), this pattern starts and ends with a string.
