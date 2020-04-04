using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PickleAndHope.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PicklesController : ControllerBase
    {
        [HttpPost]
        public IActionResult AddPickle(Pickle pickleToAdd)
        {

        }
    }
}