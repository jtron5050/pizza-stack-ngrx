
export interface Ticket {
    id: string;
    date: Date;
    type: string;
    customerId: string;
    size: Size;
}

export enum Size {
    S, 
    M, 
    L, 
    XL
}
