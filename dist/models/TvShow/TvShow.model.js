"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShow = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Actor_model_1 = require("../Actor.model");
const Director_model_1 = require("../Director.model");
const Season_model_1 = require("./Season.model");
let TvShow = class TvShow extends sequelize_typescript_1.Model {
};
exports.TvShow = TvShow;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], TvShow.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], TvShow.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Director_model_1.Director),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], TvShow.prototype, "directorId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Director_model_1.Director),
    __metadata("design:type", Director_model_1.Director)
], TvShow.prototype, "director", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Actor_model_1.Actor, "TvShowActors", "tvShowId", "actorId"),
    __metadata("design:type", Array)
], TvShow.prototype, "actors", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Season_model_1.Season),
    __metadata("design:type", Array)
], TvShow.prototype, "seasons", void 0);
exports.TvShow = TvShow = __decorate([
    sequelize_typescript_1.Table
], TvShow);
