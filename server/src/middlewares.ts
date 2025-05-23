import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.info(`Received request - ${req.method} ${req.url}`)
    next()
}

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err)

    if (err instanceof ZodError) {
        res.status(400).send({
            status: 400,
            message: 'Invalid payload',
            validationErrors: err.flatten()
        })
    }
    else {
        res.status(500).send({
            status: 500, 
            message: 'Unknown error occurred'
        })
    }
}
