import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define User Schema
const userSchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 100 },
  email: { type: String, required: true, unique: true },
  avatarUrl: { type: String, required: true },
  description: { type: String, minlength: 2, maxlength: 1000 },
  githubUrl: { type: String },
  linkedinUrl: { type: String },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
});

// Define Project Schema
const projectSchema = new Schema({
  title: { type: String, required: true, minlength: 3 },
  description: { type: String, required: true },
  image: { type: String, required: true },
  liveSiteUrl: { type: String, required: true },
  githubUrl: { type: String, required: true },
  category: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

// Create User and Project models
const UserModel = mongoose.model('User', userSchema);
const ProjectModel = mongoose.model('Project', projectSchema);

export { UserModel, ProjectModel };
