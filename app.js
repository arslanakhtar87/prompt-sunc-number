"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let num1 = parseInt(prompt('enter fierst number: '));
let num2 = parseInt(prompt('enter second number: '));
console.log(typeof num2);
console.log(num1 + num2);
