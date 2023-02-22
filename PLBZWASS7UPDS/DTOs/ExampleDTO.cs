using System.ComponentModel.DataAnnotations;

namespace PLBZWASS7UPDS.DTOs
{
    public class ExampleDTO
    {
		[Required]
		public string cadena { get; set; }

		public int entero { get; set; }

		public DateTime fecha { get; set; }
    }
}
