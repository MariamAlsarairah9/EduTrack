using System.ComponentModel.DataAnnotations;

namespace EduTrack.Model
{
    public class Attendance
    {
        [Key]
        public long Id { get; set; }
        public DateTime DayAbsent { get; set; }
        public long StudentId { get; set; }
    }
}
