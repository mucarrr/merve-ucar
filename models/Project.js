import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  longDescription: {
    type: String,
    default: '',
  },
  githubUrl: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'JavaScript',
  },
  updatedAt: {
    type: String,
    default: new Date().toISOString(),
  },
  technologies: [{
    type: String,
  }],
  image: {
    type: String,
    default: '',
  },
  liveUrl: {
    type: String,
    default: '',
  },
  featured: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    default: '',
  },
  order: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
