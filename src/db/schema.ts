import { pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core'

export const users = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    clerkId: text('clerk_id').unique().notNull(),
    name: text('name').notNull(),
    imageUrl: text('image_url').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (table) => [uniqueIndex('clerk_id_idx').on(table.clerkId)],
)

//Maaaaaayyybe clerkId as a primary key, for now use index to query faster
//npx drizzle-kit push anytime i make a change to schema
