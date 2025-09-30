using System.ComponentModel.DataAnnotations;

namespace EduTrack.DTOs.Grrades
{
    public class GradeDto
    {
        public long Id { get; set; }
        public long StudentId { get; set; }
        public string SubjectName { get; set; }
        public long score { get; set; }

    }
}
