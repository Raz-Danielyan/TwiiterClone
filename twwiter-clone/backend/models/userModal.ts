import { model, Schema, Document } from 'mongoose';

export interface UserModelInterface {
  _id?: string;
  email: string;
  fullname: string;
  username: string;
  password: string;
  confirmed_hash: string;
  token?: string;
  tweets?: string[];
  confirmed?: boolean;
  location?: string;
  about?: string;
  website?: string;
};

export type UserModelDocumentInterface = UserModelInterface & Document;
const userSchema = new Schema<UserModelInterface>({
  email: {
    unique: true,
    required: true,
    type: String
  },
  fullname: {
    required: true,
    type: String
  },
  username: {
    unique: true,
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  confirmed_hash: {
    required: true,
    type: String
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  tweets: [{
    type: Schema.Types.ObjectId, ref: 'Tweet'
  }],
  location: String,
  about: String,
  website: String,
  token: String,
}, {
  timestamps: true
});

userSchema.set('toJSON', {
  transform: function (_, obj) {
    delete obj.password;
    delete obj.confirmed_hash;
    return obj;
  }
});

export const userModel = model<UserModelDocumentInterface>('user', userSchema);