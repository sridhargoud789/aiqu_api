import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const ProductsSchema = new mongoose.Schema({
  name: { type: String, required: true },
});
