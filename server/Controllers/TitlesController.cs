using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services;
using System.Collections.Generic;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TitlesController : ControllerBase
    {
        private readonly TitleService titleService;
        
        public TitlesController(TitleService titleService)
        {
            this.titleService = titleService;
        }

        [HttpGet]
        public ActionResult<List<Title>> Get()
        {
            return titleService.Get();
        }

        [HttpGet("{id}",Name = "GetTitle")]
        public ActionResult<Title> Get(string id){
            var title = titleService.Get(id);

            if (title == null) return NotFound();
            
            return  title;
        }
    }
}