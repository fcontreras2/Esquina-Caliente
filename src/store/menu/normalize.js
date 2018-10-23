import { schema } from 'normalizr';

// Define your comments schema
const breakfastSchema = new schema.Entity('breakfast')
const restSchema = new schema.Entity('rest')

export const menu  = {
  breakfast:[breakfastSchema],
  rest: [restSchema]
}
