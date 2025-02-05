import mongoose from 'mongoose';
import { CommonFields, commonSchemaOptions } from './CommonFields';

const GameDeveloperSchema = new mongoose.Schema({
  ...CommonFields,
  developerType: { type: String, enum: ['indie', 'studio'], required: true },
  gameType: { type: String, required: true },
  customTags: [String],
  otherNeeds: String
}, commonSchemaOptions);

export default mongoose.models.GameDeveloper || mongoose.model('GameDeveloper', GameDeveloperSchema);
