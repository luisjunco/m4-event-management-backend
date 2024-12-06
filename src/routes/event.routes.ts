import { Request, Response, NextFunction } from 'express';
import { Router } from 'express';


import { RequestCreateEvent, RequestUpdateEvent } from '../types/requests';
import prisma from '../db/index';
const router = Router();


// CREATE: Add a new event
router.post('/events', async (req: RequestCreateEvent, res: Response) => {
  try {
    const { title, description, price, availableTickets, startTime } = req.body;

    const newEvent = {
      title,
      description,
      startTime,
      price,
      availableTickets,
    };

    
    const response = await prisma.event.create({data: newEvent});
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create event'});
  }
});

// READ: Get all events
router.get('/events', async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany();
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch events' });
  }
});

// READ: Get a specific event by ID
router.get('/events/:id', async (req: Request, res: Response) => {
  try {
    const event = await prisma.event.findUnique({ where: {id: req.params.id}});
    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch event' });
  }
});

// UPDATE: Update an event by ID
router.put('/events/:id', async (req: RequestUpdateEvent, res: Response) => {
  try {
    const { title, description, price, availableTickets, startTime } = req.body;

    const newDetails = {
      title,
      description,
      startTime,
      price,
      availableTickets,
    };

    const updatedEvent = await prisma.event.update({where: {id: req.params.id}, data: newDetails});

    res.json(updatedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update event' });
  }
});

// DELETE: Delete an event by ID
router.delete('/events/:id', async (req: Request, res: Response) => {
  try {
    const deletedEvent = await prisma.event.delete({where: {id: req.params.id}});

    res.json(deletedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete event' });
  }
});

export default router;
