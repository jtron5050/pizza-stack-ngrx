
export interface Ticket {
    id: string;
    date: string;
    type: string;
    customer: Customer;
    size: string;
    state: string;
}

export interface Customer {
    id: string;
    name: string;
    address: string
}
