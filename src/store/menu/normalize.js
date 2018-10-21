import { schema } from 'normalizr';

const item = new schema.Entity('items');

// Define your comments schema
const breakfastSchema = new schema.Entity('breakfast')
const restSchema = new schema.Entity('rest')

export const menu  = {
  breakfast:[breakfastSchema],
  rest: [restSchema]
}
