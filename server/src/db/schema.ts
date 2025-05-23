import { pgTable, text, uuid, timestamp, json } from "drizzle-orm/pg-core"

export const events = pgTable('events', {
    id: uuid().primaryKey(),
    eventType: text().notNull(),
    data: json().notNull(),
    /** timestamp coming directly from event */
    timestamp: timestamp(),
    createdAt: timestamp().notNull().defaultNow()
});
