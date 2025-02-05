export const CommonFields = {
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  preferredContact: { type: String, required: true },
  heardAboutUs: { type: String, required: true },
  message: { type: String, required: true },
  customBadge: String,
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
};

export const commonSchemaOptions = {
  timestamps: true
};
