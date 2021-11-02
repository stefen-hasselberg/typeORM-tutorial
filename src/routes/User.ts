import {Router, Request, Response } from 'express';

// Create a Router object
export const router:Router = Router()

router.get('/', (req:Request, resp:Response) => {

  resp.send('Hello From user Route ???')
})