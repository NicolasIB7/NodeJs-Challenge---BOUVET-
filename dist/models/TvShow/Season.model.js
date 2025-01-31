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
exports.Season = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const TvShow_model_1 = require("./TvShow.model");
const Episode_model_1 = require("./Episode.model");
let Season = class Season extends sequelize_typescript_1.Model {
};
exports.Season = Season;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Season.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => TvShow_model_1.TvShow),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Season.prototype, "tvShowId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => TvShow_model_1.TvShow),
    __metadata("design:type", TvShow_model_1.TvShow)
], Season.prototype, "tvShow", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Season.prototype, "seasonName", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Episode_model_1.Episode),
    __metadata("design:type", Array)
], Season.prototype, "episodes", void 0);
exports.Season = Season = __decorate([
    sequelize_typescript_1.Table
], Season);
