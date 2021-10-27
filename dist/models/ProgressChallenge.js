"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressChallenge = void 0;
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const User_1 = require("./User");
;
class ProgressChallenge extends sequelize_1.Model {
}
exports.ProgressChallenge = ProgressChallenge;
ProgressChallenge.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    course_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    challenge_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    modelName: 'ProgressChallenge',
    tableName: 'ProgressChallenge',
    sequelize: index_1.default,
    timestamps: false,
    underscored: false,
    freezeTableName: true,
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
});
ProgressChallenge.belongsTo(User_1.User, {
    foreignKey: "user_id",
    targetKey: "id",
    onDelete: "cascade"
});
//# sourceMappingURL=ProgressChallenge.js.map