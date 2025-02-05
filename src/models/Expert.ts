import mongoose from 'mongoose';
import { CommonFields, commonSchemaOptions } from './CommonFields';

const ExpertSchema = new mongoose.Schema({
  ...CommonFields,
  companyName: { type: String, required: true },
  fieldOfExpertise: { type: String, required: true },
  mentorCollaboration: Boolean,
  linkedinUrl: String
}, commonSchemaOptions);

export default mongoose.models.Expert || mongoose.model('Expert', ExpertSchema);
