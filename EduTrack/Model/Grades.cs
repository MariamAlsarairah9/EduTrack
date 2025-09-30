using System.ComponentModel.DataAnnotations;

namespace EduTrack.Model
{
    public class Grades
    {
        [Key]
        public long Id { get; set; }
        public long StudentId { get; set; }

        [MaxLength(50)]
        public string SubjectName { get; set; }
        public long score { get; set; }


    }
}
