import { schema } from 'normalizr';

// Define your comments schema
const ordersSchema = new schema.Entity('orders')
const historySchema = new schema.Entity('history')

export const orders  = {
  orders:[ordersSchema],
  history: [historySchema]
}
