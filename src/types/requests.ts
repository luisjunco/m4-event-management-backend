import { Request } from "express";


export interface RequestCreateEvent extends Request {
    body: {
        title: string, 
        description: string,
        price: number, 
        availableTickets?: number,
        startTime?: string, // startTime as a string, since we expect the request in json
    }
}

export interface RequestUpdateEvent extends Request {
    body: {
        title?: string, 
        description?: string,
        price?: number, 
        availableTickets?: number,
        startTime?: string, // startTime as a string, since we expect the request in json
    }
}

