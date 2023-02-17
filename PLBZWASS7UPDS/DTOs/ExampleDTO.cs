using System.ComponentModel.DataAnnotations;

namespace PLBZWASS7UPDS.DTOs
{
    public class ExampleDTO
    {
		[Required(ErrorMessage = "El campo {0} es requerido")]
		public string cadena { get; set; }

		[Required(ErrorMessage = "El campo {0} es requerido")]
		public int entero { get; set; }

		[Required(ErrorMessage = "El campo {0} es requerido")]
		public DateTime fecha { get; set; }
    }
}
