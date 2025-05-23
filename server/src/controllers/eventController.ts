import {Request, Response} from 'express'
import {v4 as uuidv4} from 'uuid'
import { db } from '../db/db'
import { events } from '../db/schema'
import { z } from 'zod'

const eventBodySchema = z.object({
    eventType: z.string(), // could be an enum if we want to be stricter
    data: z.any()
})

export async function postEvent(req: Request, res: Response) {
    const {eventType, data} = eventBodySchema.parse(JSON.parse(req.body))

    console.info(`Processing ${eventType} event...`)
    
    await db.insert(events).values({
        id: uuidv4(),
        eventType,
        data,
        timestamp: data.timestamp ? new Date(data.timestamp) : null
    })

    res.status(202).send()
}
