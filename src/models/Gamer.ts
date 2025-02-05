import mongoose from 'mongoose';
import { CommonFields, commonSchemaOptions } from './CommonFields';

const GamerSchema = new mongoose.Schema({
  ...CommonFields,
  interests: {
    type: [String],
    required: true,
    validate: {
      validator: function(v: string[]) {
        return Array.isArray(v) && v.length > 0;
      },
      message: 'At least one interest must be selected'
    }
  },
  otherInterests: {
    type: String,
    maxlength: [200, 'Other interests cannot exceed 200 characters']
  },
  improvementSuggestions: {
    type: String,
    maxlength: [1000, 'Suggestions cannot exceed 1000 characters']
  },
  // Additional gaming preferences
  preferredPlatforms: {
    type: [String],
    enum: ['pc', 'mobile', 'console', 'web', 'ar-vr', 'other'],
    default: []
  },
  gameTypes: {
    type: [String],
    enum: ['action', 'adventure', 'rpg', 'strategy', 'casual', 'sports', 'other'],
    default: []
  },
  betaTester: {
    type: Boolean,
    default: false
  }
}, commonSchemaOptions);

// Add index for better query performance
GamerSchema.index({ createdAt: -1 });
GamerSchema.index({ email: 1 }, { unique: true });

export default mongoose.models.Gamer || mongoose.model('Gamer', GamerSchema);
