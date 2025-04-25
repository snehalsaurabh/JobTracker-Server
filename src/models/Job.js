import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: String, enum: ['Applied', 'Interview', 'Offer', 'Rejected'], required: true },
  dateOfApplication: { type: Date, required: true },
  link: { type: String },
});

const Job = mongoose.model('Job', jobSchema);
export default Job;