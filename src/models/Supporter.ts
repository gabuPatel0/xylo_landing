import mongoose from 'mongoose';

const SupporterSchema = new mongoose.Schema({
  // Base Fields
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  userRole: { type: String, required: true },

  // Investor/Expert Fields
  companyName: String,
  investorType: { type: String, enum: ['individual', 'firm'] },
  investmentInterest: String,
  investmentRange: String,
  fieldOfExpertise: String,
  mentorCollaboration: Boolean,
  linkedinUrl: String,

  // Game Developer Fields
  developerType: { type: String, enum: ['indie', 'studio'] },
  gameType: String,
  customTags: [String],
  otherNeeds: String,

  // Gamer/Visitor Fields
  interests: [String],
  otherInterests: String,
  improvementSuggestions: String,

  // Common Fields
  preferredContact: { type: String, required: true },
  heardAboutUs: { type: String, required: true },
  message: { type: String, required: true },
  customBadge: String,

  // Metadata
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
}, {
  timestamps: true
});

export default mongoose.models.Supporter || mongoose.model('Supporter', SupporterSchema);
