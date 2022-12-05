using Microsoft.AspNetCore.Mvc;
using MWStat.API.BusinessServices.Interfaces;
using Newtonsoft.Json;

namespace MWStat.API.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class StatisticController : ControllerBase
    {
        private readonly ILogger<StatisticController> logger;
        private readonly IInstagramService instagramService;

        public StatisticController(ILogger<StatisticController> logger, IInstagramService instagramService)
        {
            this.logger = logger ?? throw new ArgumentNullException(nameof(logger));
            this.instagramService = instagramService ?? throw new ArgumentNullException(nameof(instagramService));
        }

        [HttpGet]
        public async Task<IActionResult> UpdateFollowersAndFollowing()
        {
            await instagramService.UpdateFollowersAndFollowing();

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetFollowersAndFollowing(DateTime? from, DateTime? to)
        {
            if (from == null)
            {
                from = DateTime.Now.AddYears(-1);
            }
            if (to == null)
            {
                to = DateTime.Now;
            }

            var result = await instagramService.GetFollowersAndFollowing((DateTime)from, (DateTime)to);
            var jsonResult = JsonConvert.SerializeObject(result);

            return Ok(jsonResult);
        }
    }
}