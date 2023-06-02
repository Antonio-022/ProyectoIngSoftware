namespace PLBZWASS7UPDS.DTOs
{
    public class PersonaJugadorDTO
    {
        public int persona_id { get; set; }
        public string? apellidoMaterno { get; set; }
        public string? apellidoPaterno { get; set; }
        public int? documentoIdentidad { get; set; }
        public int? edad { get; set; }
        public string? nacionalidad { get; set; }
        public string? nombre { get; set; }
        public int? telefono { get; set; }
        public List<Jugador> Jugador { get; set; } = new List<Jugador>();

    }
    public partial class Jugador
    {
        public int jugadorid { get; set; }
        public string? altura { get; set; }
        public int? equipoId { get; set; }
        public string? estadisticas { get; set; }
        public string? habilidades { get; set; }
        public string? lesiones { get; set; }
        public int? numero_camiseta { get; set; }
        public int? peso { get; set; }
        public int? posicion { get; set; }
        public int? personaId { get; set; }
    }
}
