#!/usr/bin/env node
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var chalk_animation_1 = require("chalk-animation");
var sleep = function () {
    return new Promise(function (res) {
        setTimeout(res, 2000);
    });
};
function wellcome() {
    return __awaiter(this, void 0, void 0, function () {
        var ranbowTitle, pulseTitle, neonTile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ranbowTitle = chalk_animation_1.default.rainbow("let's start ATM MACHINE hello honey aur you real");
                    return [4 /*yield*/, sleep()];
                case 1:
                    _a.sent();
                    ranbowTitle.replace("with NODE.JS INQUIRER and CHALK");
                    return [4 /*yield*/, sleep()];
                case 2:
                    _a.sent();
                    ranbowTitle.replace("let enjoy ATM MACHINE !!!");
                    return [4 /*yield*/, sleep()];
                case 3:
                    _a.sent();
                    ranbowTitle.stop();
                    pulseTitle = chalk_animation_1.default.pulse("Developed by ASSAD AWAN fro TypeScript .");
                    return [4 /*yield*/, sleep()];
                case 4:
                    _a.sent();
                    pulseTitle.stop();
                    neonTile = chalk_animation_1.default.neon("  \n\n                 BANK AL HABIB  \n    _____________________________________          \n   |                                     |                         \n   |     ___________________________     | \n   |    |  _                        |    |\n   |    | A|M MACHINE        1.00.0 |    |      \n   |    |___________________________|    |\n   |     ____ ____ ____      ________    |\n   |    |  7 |  8 |  9 |    | CANCEL |   |\n   |    |____|____|____|    |________|   |\n   |    |  4 |  5 |  6 |    | CLEAR  |   |\n   |    |____|____|____|    |________|   |\n   |    |  1 |  2 |  3 |    | ENTER  |   |\n   |    |____|____|____|    |________|   |\n   |    |  . |  0 |  = |    |        |   |\n   |    |____|____|____|    |________|   |\n   |                                     |\n   |_____________________________________|\n   ");
                    return [4 /*yield*/, sleep()];
                case 5:
                    _a.sent();
                    neonTile.stop();
                    return [2 /*return*/];
            }
        });
    });
}
wellcome();
var answers = await inquirer_1.default.prompt([
    {
        type: "input",
        name: "userID",
        message: "kindly yuor userID:",
    }, {
        type: "number",
        name: "userPin",
        message: "kindly yuor userPin:",
    },
    {
        type: "list",
        name: "accounttype",
        choices: ["Current", "Saving"],
        message: (chalk_1.default.blue(templateObject_1 || (templateObject_1 = __makeTemplateObject(["select your account type :"], ["select your account type :"])))),
    },
    {
        type: "list",
        name: "transactiontype",
        choices: ["Fast Cash", "Withdraw"],
        message: (chalk_1.default.gray(templateObject_2 || (templateObject_2 = __makeTemplateObject(["select your transaction :"], ["select your transaction :"])))),
        when: function (answers) {
            return answers.accounttype;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 3000, 4000, 5000, 10000,],
        message: (chalk_1.default.red(templateObject_3 || (templateObject_3 = __makeTemplateObject(["select your account"], ["select your account"])))),
        when: function (answers) {
            return answers.transactiontype == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: (chalk_1.default.cyan(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Enter your account"], ["Enter your account"])))),
        when: function (answers) {
            return answers.transactiontype == "Withdraw";
        },
    }
]);
if (answers.userID && answers.userPin) {
    var balance = Math.floor(Math.random() * 1000000);
    console.log(balance);
    var Enteredamount = answers.amount;
    if (balance >= Enteredamount) {
        var remining = balance - Enteredamount;
        console.log(chalk_1.default.green("your remaining balance is", remining));
    }
    else {
        console.log(chalk_1.default.yellow("Insuficent balance"));
    }
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
