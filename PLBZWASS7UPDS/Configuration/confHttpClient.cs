using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.DependencyInjection;
using PLBZWASS7UPDS.Repositorios;



namespace Biblioteca.Web.Configuration
{
    public static class confHttpClient
    {
        public static IHttpClientBuilder AddConfReposirioHTTP(this IServiceCollection services, WebAssemblyHostConfiguration configuration)
        {


            return services.AddHttpClient<IRepositorio, Repositorio>((serviceProvider, options) =>
            {
                options.BaseAddress = new Uri(configuration["endpoints:api"]!);
            });
        }
    }
}