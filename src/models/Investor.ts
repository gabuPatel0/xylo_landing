import mongoose from 'mongoose';
import { CommonFields, commonSchemaOptions } from './CommonFields';

const InvestorSchema = new mongoose.Schema({
  ...CommonFields,
  companyName: { type: String, required: true },
  investorType: { type: String, enum: ['individual', 'firm'], required: true },
  investmentInterest: { type: String, required: true },
  investmentRange: { type: String, required: true },
  fieldOfExpertise: String,
  mentorCollaboration: Boolean,
  linkedinUrl: String
}, commonSchemaOptions);

export default mongoose.models.Investor || mongoose.model('Investor', InvestorSchema);
