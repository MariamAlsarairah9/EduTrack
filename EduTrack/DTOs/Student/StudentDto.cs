using System.ComponentModel.DataAnnotations;

namespace EduTrack.DTOs.Student
{
    public class StudentDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long GradeLevel { get; set; }
        public string Class { get; set; }
        public long? TeacherId { get; set; }
        public long ParentId { get; set; }
    }
}
