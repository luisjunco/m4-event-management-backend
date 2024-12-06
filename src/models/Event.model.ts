import { model, Schema, Model, InferSchemaType } from 'mongoose';

// Schema
const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  availableTickets: {
    type: Number,
    min: 0,
  },
  startTime: {
    type: Date
  },
});

// Type alias
type EventType = InferSchemaType<typeof eventSchema>;


// Model
const Event: Model<EventType> = model('Event', eventSchema);

export default Event;
