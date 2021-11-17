import { body } from 'express-validator';

export const registerValidators = [
  body('email', 'введите E-Mail').isEmail().withMessage('неверный E-Mail').isLength({
    min: 10,
    max: 40
  }).withMessage('неверная длина почты. 10-40'),
  body('fullname', 'введите ваше имя').isString().isLength({
    min: 2,
    max: 30
  }).withMessage('неверная длина имени. 2-10'),
  body('username', 'укажите ваш логин').isString().isLength({
    min: 2,
    max: 30
  }).withMessage('неверная длина логина. 2-20'),
  body('password', 'укажите пароль').isString().isLength({
    min: 6,
  }).withMessage('неверная длина пароля.Минимум 6'),
]