using Biblioteca.Web.Configuration;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Configuration;
using MudBlazor.Services;
using PLBZWASS7UPDS;
using PLBZWASS7UPDS.Auth;
using PLBZWASS7UPDS.Helpers;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
var configuration = builder.Configuration;
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });


builder.Services.AddScoped<IMostrarMensajes, MostrarMensajes>();
builder.Services.AddScoped<IMensajeToastr, MensajeToastr>();

builder.Services.AddAuthorizationCore();

builder.Services.AddScoped<ProveedorAutenticacionJWT>();
builder.Services.AddScoped<AuthenticationStateProvider, ProveedorAutenticacionJWT>(
    provider => provider.GetRequiredService<ProveedorAutenticacionJWT>());
builder.Services.AddScoped<ILoginService, ProveedorAutenticacionJWT>(
   provider => provider.GetRequiredService<ProveedorAutenticacionJWT>());
builder.Services.AddScoped<RenovadorToken>();
builder.Services.AddScoped<UserJWT>();

builder.Services.AddConfReposirioHTTP(configuration);

await builder.Build().RunAsync();
