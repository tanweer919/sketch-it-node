"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.turn = exports.round = exports.status = exports.gameStatus = exports.messages = exports.sketcher = exports.players = exports.hardWords = exports.mediumWords = exports.easyWords = void 0;
const easyWords = (roomId) => `easyWords:${roomId}`;
exports.easyWords = easyWords;
const mediumWords = (roomId) => `mediumWords:${roomId}`;
exports.mediumWords = mediumWords;
const hardWords = (roomId) => `hardWords:${roomId}`;
exports.hardWords = hardWords;
const players = (roomId) => `players:${roomId}`;
exports.players = players;
const sketcher = (roomId) => `sketcher:${roomId}`;
exports.sketcher = sketcher;
const messages = (roomId) => `messages:${roomId}`;
exports.messages = messages;
const gameStatus = (roomId) => `gameStatus:${roomId}`;
exports.gameStatus = gameStatus;
const status = (roomId) => `status:${roomId}`;
exports.status = status;
const round = (roomId) => `round:${roomId}`;
exports.round = round;
const turn = (roomId) => `turn:${roomId}`;
exports.turn = turn;
//# sourceMappingURL=redisKeys.js.map