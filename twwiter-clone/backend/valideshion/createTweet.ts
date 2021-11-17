import { body } from 'express-validator';

export const createTweetValidators = [
  body('text', 'введите текст твита').isString().isLength({
    max: 280
  }).withMessage('максимальная длина твита 280 знаков'),
]