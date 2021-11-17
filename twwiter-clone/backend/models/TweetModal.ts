import { model, Schema, Document } from 'mongoose';
import { UserModelInterface } from './userModal';

export interface TweetModelInterface {
  _id?: string;
  text: string;
  user: UserModelInterface;
  images?: [string];
};

export type TweetModelDocumentInterface = TweetModelInterface & Document;
const TweetSchema = new Schema<TweetModelInterface>({
  text: {
    required: true,
    type: String,
    maxlength: 280
  },
  user: {
    required: true,
    ref: "user",
    type: Schema.Types.ObjectId
  },
  images: [String],
}, {
  timestamps: true
});

export const TweetModel = model<TweetModelDocumentInterface>('Tweet', TweetSchema);