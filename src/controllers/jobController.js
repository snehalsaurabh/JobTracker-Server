import Job from '../models/Job.js';

// Create a new job application
export const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all job applications
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a job application
export const updateJob = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a job application
export const deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};