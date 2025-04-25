import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: String, enum: ['Applied', 'Interview', 'Offer', 'Rejected'], required: true },
  dateApplied: { type: Date, required: true }, // Changed from dateOfApplication
  link: { type: String },
  notes: { type: String }, // Added notes field
});

const Job = mongoose.model('Job', jobSchema);
export default Job;