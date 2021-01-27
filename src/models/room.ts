import mongoose, {Document, Model, Schema } from 'mongoose';
import { roomInterface } from '../interfaces/interface';
import User from './User';

const roomSchema = new mongoose.Schema<roomInterface>({
  name: String,
  roomId: String,
  maxPlayers: Number,
  gameMode: Number,
  currentPlayers: Number,
  active: Number,
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Room: Model<roomInterface> = mongoose.model("Room", roomSchema);
export default Room;