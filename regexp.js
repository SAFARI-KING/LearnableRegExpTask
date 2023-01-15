"use strict";
const prompt = require("prompt-sync")({ sigint: true });

const cardNumber = /^\d{16}$/;
const cardExDate = /^(1[0-2]|[1-9]|0[1-9])\/(2[3-9]|[3-9]\d)$/;
const cardType = /^(VISA|EXPRESS|MASTERCARD|VERVE)$/;

console.log("........VALIDATE YOUR CREDIT CARD HERE!........\n");

const inputCN = prompt("16 Digit Card Number: ");
console.log("\nCard Expiry Date (eg. 02/25):");
const inputCED = prompt(" ");
console.log("\nChoose Your Card Type: VISA|EXPRESS|MASTERCARD|VERVE:");
const inputCT = prompt(" ");

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
