"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addActor = void 0;
const db_1 = __importDefault(require("../config/db"));
const addActor = async (data) => {
    try {
        const name = data.name;
        const lastName = data.lastName;
        const birthDate = data.birthDate;
        const newActor = await db_1.default.models.Actor.create({
            name,
            lastName,
            birthDate,
        });
        PageTransitionEvent;
        return newActor;
    }
    catch (error) {
        throw error;
    }
};
exports.addActor = addActor;
