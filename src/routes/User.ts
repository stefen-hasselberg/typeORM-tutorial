import {Router, Request, Response } from 'express';
import { dbconn } from '../db/db';

// Create a Router object
export const router:Router = Router()

router.get('/', async (req:Request, resp:Response) => {

  const conn = await dbconn()

  resp.send('Hello From user Route $$$$')
})