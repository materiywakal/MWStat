using Microsoft.AspNetCore.Mvc;
using MWStat.API.BusinessServices.Interfaces;
using Newtonsoft.Json;

namespace MWStat.API.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class StatisticController : ControllerBase
    {
        private readonly IInstagramService instagramService;

        public StatisticController(IInstagramService instagramService)
        {
            this.instagramService = instagramService ?? throw new ArgumentNullException(nameof(instagramService));
        }

        [HttpGet]
        public async Task<IActionResult> UpdateFollowersAndFollowing()
        {
            await instagramService.UpdateFollowersAndFollowing();

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetFollowersAndFollowing(string from, string to)
        {
            DateTime _from;            
            DateTime _to;
            if (!DateTime.TryParse(from, out _from))
            {
                _from = DateTime.Now.AddYears(-1);
            }
            if (!DateTime.TryParse(to, out _to))
            {
                _to = DateTime.Now;
            }

            try
            {
                var result = await instagramService.GetFollowersAndFollowing(_from, _to);
                var jsonResult = JsonConvert.SerializeObject(result);

                return Ok(jsonResult);
            }
            catch
            {
                return BadRequest("Error occured.");
            }
        }
    }
}