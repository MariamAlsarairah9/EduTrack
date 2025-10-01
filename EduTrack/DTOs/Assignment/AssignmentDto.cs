namespace EduTrack.DTOs.Assignment
{
    public class AssignmentDto
    {
        public long Id { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public DateTime DueDateSub { get; set; }
        public long StudentId { get; set; }
    }
}
