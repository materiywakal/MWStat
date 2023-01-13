using Microsoft.AspNetCore.Mvc;
using MWStat.API.BusinessServices.Interfaces;

namespace MWStat.API.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ProfileInteractionController : ControllerBase
    {
        private readonly IInstagramService instagramService;
        public ProfileInteractionController(IInstagramService instagramService)
        {
            this.instagramService = instagramService ?? throw new ArgumentNullException(nameof(instagramService));
        }

        [HttpGet]
        public async Task<IActionResult> Follow(string pk)
        {
            if (pk == null)
            {
                return BadRequest();
            }

            await instagramService.FollowUser(long.Parse(pk));
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> Unfollow(string pk)
        {
            if (pk == null)
            {
                return BadRequest();
            }

            await instagramService.UnfollowUser(long.Parse(pk));
            return Ok();
        }
    }
}
