using Microsoft.AspNetCore.Mvc;
using MWStat.API.BusinessServices.Interfaces;

namespace MWStat.API.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<StatisticController> logger;
        private readonly IInstagramAuthService instagramAuthService;

        public AuthController(ILogger<StatisticController> logger, IInstagramAuthService instagramAuthService)
        {
            this.logger = logger ?? throw new ArgumentNullException(nameof(logger));
            this.instagramAuthService = instagramAuthService ?? throw new ArgumentNullException(nameof(instagramAuthService));
        }

        [HttpGet]
        public async Task<IActionResult> Login(string username, string password)
        {
            if(username == null || password == null)
            {
                return BadRequest();
            }

            await instagramAuthService.CreateSessionData(username, password);

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            var pk = Request.Cookies["pk"];
            var authToken = Request.Cookies["authToken"];
            await instagramAuthService.DeleteSessionData(pk, authToken);

            return Ok();
        }
    }
}
