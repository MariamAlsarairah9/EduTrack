using EduTrack.DTOs.Attendance;
using EduTrack.DTOs.Grrades;

namespace EduTrack.DTOs.Grrade
{
    public class SaveGradeDto
    {
        public long Id { get; set; }
        public long StudentId { get; set; }
        public string SubjectName { get; set; }
        public long score { get; set; }
        public List<GradeDto> GradesDto { get; set; } = new List<GradeDto>();
        public long SubjectId { get; set; }

    }
}
