namespace EduTrack.DTOs.Attendance
{
    public class SaveAttendanceDto
    {
        public long Id { get; set; }
        public DateTime DayAbsent { get; set; }
        public long StudentId { get; set; }
        public List<SaveAttendanceDto> AttendanceDto { get; set; } = new List<SaveAttendanceDto>();

    }
}
