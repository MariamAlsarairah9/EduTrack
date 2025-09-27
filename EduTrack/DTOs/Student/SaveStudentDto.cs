using System.ComponentModel.DataAnnotations;

namespace EduTrack.DTOs.Student
{
    public class SaveStudentDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long GradeLevel { get; set; }
        public string Class { get; set; }

    }
}
