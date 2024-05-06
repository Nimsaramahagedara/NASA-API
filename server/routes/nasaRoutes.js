import express from 'express'
import { loginValidator } from '../middlewares/loginValidator.js';
import { getFeed, getImageOfTheDay } from '../controllers/nasaController.js';
const nasaRouter = express.Router();

nasaRouter.get('/', getImageOfTheDay)
 nasaRouter.get('/feed', getFeed)



export default nasaRouter;