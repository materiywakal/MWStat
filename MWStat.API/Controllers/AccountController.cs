using Microsoft.AspNetCore.Mvc;
using MWStat.API.BusinessServices.Interfaces;
using Newtonsoft.Json;

namespace MWStat.API.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class AccountController : ControllerBase
    {
        private readonly IInstagramAccountService instagramAuthService;
        private readonly IUserHelper userHelper;

        public AccountController(IInstagramAccountService instagramAuthService, IUserHelper userHelper)
        {
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
        public async Task<IActionResult> GetUserInfo()
        {
            var user = await userHelper.GetCurrentUser();
            if(user == null)
            {
                return BadRequest("User is not logged in");
            }

            var jsonResult = JsonConvert.SerializeObject(new {username = user.Username, profilePicUrl = user.ProfilePicUrl});

            return Ok(jsonResult);
        }
    }
}
