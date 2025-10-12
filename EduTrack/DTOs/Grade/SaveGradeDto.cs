using EduTrack.DTOs.Attendance;
using EduTrack.DTOs.Grade;

namespace EduTrack.DTOs.Grrade
{
    public class SaveGradeDto
    {
        public long Id { get; set; }
        public long StudentId { get; set; }
        public string? SubjectName { get; set; }
        public long score { get; set; }
        public List<SaveGradeDto>? GradeDto { get; set; } = new List<SaveGradeDto>();
        public long SubjectId { get; set; }

    }
}
