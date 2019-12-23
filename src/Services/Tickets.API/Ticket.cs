using System;

namespace Tickets.API
{
    public class Ticket
    {
        public string Id { get; set; }

        public DateTime Date { get; set; }

        public string Type { get; set; }

        public Customer Customer { get; set; }

        public string Size { get; set; }

        public TicketState State { get; set; }
    }

    public class Customer 
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }        
    }

    public enum TicketState
    {
        New,
        Preparing,
        Cooking,
        Ready,
        Complete
    }
}
