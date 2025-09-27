using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace EduTrack.Model
{
    public class Student
    {
        
            [Key]
            public long Id { get; set; }
            [MaxLength(50)]
            public string Name { get; set; }
            public long  GradeLevel { get; set; }
            public string Class { get; set; }    




    }
}
