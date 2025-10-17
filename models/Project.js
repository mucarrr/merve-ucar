import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  html_url: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'JavaScript',
  },
  updated_at: {
    type: Date,
    required: true,
  },
  topics: [{
    type: String,
  }],
  gif_url: {
    type: String,
    default: '',
  },
  homepage: {
    type: String,
    default: '',
  },
  stargazers_count: {
    type: Number,
    default: 0,
  },
  forks_count: {
    type: Number,
    default: 0,
  },
  is_featured: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
