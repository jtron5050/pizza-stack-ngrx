using System;

namespace Tickets.API
{
    public class Ticket
    {
        public string Id { get; set; }

        public DateTime Date { get; set; }

        public string Type { get; set; }

        public string CustomerId { get; set; }

        public string Size { get; set; }
    }
}
