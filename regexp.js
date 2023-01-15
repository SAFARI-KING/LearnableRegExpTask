"use strict";
const prompt = require("prompt-sync")({ sigint: true });

// test for 16 digits credit card number
const cardNumber = /^\d{16}$/;

// test for card expiry date
const cardExDate = /^(1[0-2]|[1-9]|0[1-9])\/(2[3-9]|[3-9]\d)$/;

// test for card type
const cardType = /^(VISA|EXPRESS|MASTERCARD|VERVE)$/;

console.log("........VALIDATE YOUR CREDIT CARD HERE!........\n");

const inputCN = prompt("16 Digit Card Number: ");

console.log("\nCard Expiry Date (eg. 02/25):");

const inputCED = prompt(" ");

console.log("\nChoose Your Card Type: VISA|EXPRESS|MASTERCARD|VERVE:");

const inputCT = prompt(" ");

// test user details and update the user
const updateCard = function () {
  if (
    cardNumber.test(inputCN.trim()) &&
    cardExDate.test(inputCED.trim()) &&
    cardType.test(inputCT.toUpperCase().trim())
  ) {
    console.log("\n*********************************");
    console.log(
      `\nHey!👋👋👋\n\nCard: ${inputCN.trim()}\nExpiry Date: ${inputCED.trim()}\nType: ${inputCT
        .toUpperCase()
        .trim()}\n\nYour Details Are Valid!🎉\n`
    );
  } else {
    throw new Error("Invalid Card!🔴");
  }
};
updateCard();
