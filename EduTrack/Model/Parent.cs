using System.ComponentModel.DataAnnotations;

namespace EduTrack.Model
{
    public class Parent
    {
        [Key]
        public long Id { get; set; }
        [MaxLength(50)]
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public long StudentId { get; set; }
        

    }
}
