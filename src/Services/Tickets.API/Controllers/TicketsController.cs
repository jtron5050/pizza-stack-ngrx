using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;

namespace Tickets.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly ILogger<TicketsController> _logger;
        private readonly TicketsRepository _ticketsRepository;
        private readonly IHubContext<TicketsHub> _ticketsHubContext;

        public TicketsController(ILogger<TicketsController> logger, TicketsRepository ticketsRepository,IHubContext<TicketsHub> ticketsHubContext)
        {
            _logger = logger;
            _ticketsRepository = ticketsRepository;
            _ticketsHubContext = ticketsHubContext;
        }

        [HttpGet]
        public async Task<IEnumerable<Ticket>> Get()
        {
            await Task.Delay(1000);
            return _ticketsRepository.GetAll();
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Ticket ticket)
        {
            _ticketsRepository.Add(ticket);
            await _ticketsHubContext.Clients.All.SendAsync("addTicket", ticket);
            return Ok();
        }
    }

    public class TicketsRepository
    {        
        private readonly List<Ticket> _tickets;

        private readonly string[] Sizes = new[]
       {
            "S", "M", "L", "XL"
        };

        private readonly string[] Types = new[] {
            "EXTRAMOSTBESTEST CHEESE",
            "EXTRAMOSTBESTEST PEPPERONI",
            "3 MEAT TREAT"
        };

        public TicketsRepository(IHubContext<TicketsHub> ticketsHubContext)
        {            
            var rng = new Random();
            var tickets = Enumerable.Range(1, 3).Select(index => new Ticket
            {
                Id = index.ToString(),
                Date = DateTime.Now.AddHours(-index),
                Type = Types[rng.Next(Types.Length)],
                Size = Sizes[rng.Next(Sizes.Length)],
                Customer = new Customer { Id = index.ToString(), Name = $"Jones {index.ToString()}", Address = $"{index.ToString()} No Way" },
                State = TicketState.New
            });

            _tickets = new List<Ticket>(tickets);
        }

        public IEnumerable<Ticket> GetAll()
        {
            return _tickets.AsReadOnly();
        }

        public void Add(Ticket ticket)
        {
            ticket.Id = (_tickets.Count + 1).ToString();
            _tickets.Add(ticket);
            
        }
    }
}
