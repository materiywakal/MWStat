using Microsoft.AspNetCore.Mvc;
using MWStat.API.BusinessServices.Interfaces;

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
        public async Task<IActionResult> GetUserInfo(string username)
        {
            var result = await instagramService.GetUserInfo(username);

            return Ok(result.Value);
        }

        [HttpGet]
        public async Task<IActionResult> UpdateFollowersAndFollowing()
        {
            await instagramService.UpdateFollowersAndFollowing();

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetFollowersAndFollowing()
        {

            return Ok();
        }
    }
}