using Microsoft.AspNetCore.Mvc;
using MWStat.API.BusinessServices.Interfaces;
using Newtonsoft.Json;

namespace MWStat.API.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class AccountController : ControllerBase
    {
        private readonly ILogger<StatisticController> logger;
        private readonly IInstagramAccountService instagramAuthService;
        private readonly IUserHelper userHelper;

        public AccountController(ILogger<StatisticController> logger, IInstagramAccountService instagramAuthService, IUserHelper userHelper)
        {
            this.logger = logger ?? throw new ArgumentNullException(nameof(logger));
            this.instagramAuthService = instagramAuthService ?? throw new ArgumentNullException(nameof(instagramAuthService));
            this.userHelper = userHelper ?? throw new ArgumentNullException(nameof(userHelper));
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

        [HttpGet]
        public async Task<IActionResult> GetUserPhotoUrl()
        {
            var profilePicUrl = await userHelper.GetUserPhotoUrl();

            var jsonResult = JsonConvert.SerializeObject(new { url = profilePicUrl });

            return Ok(jsonResult);
        }
    }
}
