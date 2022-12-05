using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;
using MWStat.API.BusinessServices.Implementations;
using MWStat.API.BusinessServices.Interfaces;
using MWStat.API.Domain.Dtos;
using MWStat.API.ORM;
using MWStat.API.ORM.Implementations;
using MWStat.API.ORM.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDistributedMemoryCache();
builder.Services.AddDbContext<MWStatContext>(b => b.UseLazyLoadingProxies());
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie();
builder.Services.Configure<CookiePolicyOptions>(options =>
{
    options.MinimumSameSitePolicy = SameSiteMode.None;
    options.Secure = CookieSecurePolicy.Always;
});
builder.Services.AddHttpContextAccessor();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
                      {
                          policy.WithOrigins("http://localhost:4200/");
                          policy.AllowAnyHeader();
                          policy.AllowAnyMethod();
                          policy.AllowCredentials();
                          policy.SetIsOriginAllowed(x => _ = true);
                      });
});

builder.Services.AddScoped<IInstagramService, InstagramService>();
builder.Services.AddScoped<IInstagramAccountService, InstagramAccountService>();
builder.Services.AddScoped<IInstagramApiBuilder, InstagramApiBuilder>();
builder.Services.AddScoped<IRepository<InstagramSessionDataDto>, InstagramSessionDataRepository>();
builder.Services.AddScoped<IRepository<InstagramUserDto>, InstagramUserRepository>();
builder.Services.AddScoped<IRepository<InstagramRunDetailsDto>, InstagramRunDetailsRepository>();
builder.Services.AddScoped<IRepository<InstagramRunDetailsToInstagramUserDto>, InstagramRunDetailsToInstagramUserRepository>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IUserHelper, UserHelper>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.UseCookiePolicy();
app.UseCors();
app.MapControllers();

app.Run();
