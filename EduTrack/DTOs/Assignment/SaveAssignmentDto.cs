using System.ComponentModel.DataAnnotations;

namespace EduTrack.DTOs.Assignment
{
    public class SaveAssignmentDto
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public DateTime DueDateSub { get; set; }
        public long StudentId { get; set; }

    }
}
