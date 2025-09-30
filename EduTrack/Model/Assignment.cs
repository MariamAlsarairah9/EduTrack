using System.ComponentModel.DataAnnotations;

namespace EduTrack.Model
{
    public class Assignment
    {
        [Key]
        public long Id { get; set; }
        [MaxLength(50)]
        public string Title { get; set; }
        public DateTime DueDateSub { get; set; }
        public long StudentId { get; set; }
    }
}
