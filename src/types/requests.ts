import { Request } from "express";


export interface RequestCreateEvent extends Request {
    body: {
        title: string, 
        description: string,
        price: number, 
        availableTickets?: number,
        startTime?: string, // date in ISO-8601 DateTime format (as a string, since we expect the request in json)
    }
}

export interface RequestUpdateEvent extends Request {
    body: {
        title?: string, 
        description?: string,
        price?: number, 
        availableTickets?: number,
        startTime?: string, // date in ISO-8601 DateTime format (as a string, since we expect the request in json)
    }
}

