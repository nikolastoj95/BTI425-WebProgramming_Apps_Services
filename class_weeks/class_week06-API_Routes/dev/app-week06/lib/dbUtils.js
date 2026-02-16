// this folder lib 
// is for utility functions related to database operations
// such as connecting to the database, running queries, etc.
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
    unique: true,
  },
});

mongoose.models = {}; // giving an empty object to mongoose.models 
// to avoid OverwriteModelError in development mode
export const UserModel = mongoose.model('users', userSchema);

//returns a promise that resolves when the connection is successful
export async function mongooseConnect() {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(`mongodb+srv://nikola:WebDev95@cluster0.l1s2jdh.mongodb.net/userstemp06?appName=Cluster0`);
    return true;
  } catch (err) {
    throw new Error(err);
  }
}