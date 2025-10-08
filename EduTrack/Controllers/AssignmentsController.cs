using EduTrack.DTOs.Assignment;
using EduTrack.DTOs.Student;
using EduTrack.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EduTrack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignmentsController : ControllerBase
    {
        private ETDbContext _dbContext;
        public AssignmentsController(ETDbContext dbContext) //Constructor
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll([FromQuery] FilterAssignmentsDto filterDto)
        {
            try
            {
                var data = from assignment in _dbContext.Assignments
                           where (filterDto.Id == null || assignment.Id == filterDto.Id) &&
                                 (filterDto.Subject == null || assignment.Subject.ToUpper().Contains(filterDto.Subject.ToUpper()))
                           orderby assignment.Id
                           select new AssignmentDto
                           {
                               Id = assignment.Id,
                               Subject = assignment.Subject,
                               Description = assignment.Description,
                               DueDateSub = assignment.DueDateSub,
                               StudentId = assignment.StudentId
                           };


                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
         

        [HttpGet("GetById")]
        public IActionResult GetById([FromQuery] long Id)
        {
            try
            {
                var assignment = _dbContext.Assignments.Select(assignment => new AssignmentDto
                {
                    Id = assignment.Id,
                    Subject = assignment.Subject,
                    Description = assignment.Description,   
                    DueDateSub = assignment.DueDateSub,
                    StudentId = assignment.StudentId

                }).FirstOrDefault(x => x.Id == Id);


                return Ok(assignment);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Add")]

        public IActionResult Add([FromBody] SaveAssignmentDto assignmentDto)
        {
            try
            {

                var assignment = new Assignment()
                {
                    Id = 0,
                    Subject = assignmentDto.Subject,
                    Description = assignmentDto.Description,
                    DueDateSub = assignmentDto.DueDateSub,
                    StudentId = assignmentDto.StudentId
                };
                _dbContext.Assignments.Add(assignment);
                _dbContext.SaveChanges();
                return Ok();


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("Update")]
        public IActionResult Update(SaveAssignmentDto assignmentDto)
        {
            try
            {
                var assignment = _dbContext.Assignments.FirstOrDefault(x => x.Id == assignmentDto.Id);
                if (assignment == null)
                {
                    return BadRequest("Assignment Not Found!");
                }
                assignment.Subject = assignmentDto.Subject;
                assignment.Description = assignmentDto.Description;
                assignment.DueDateSub = assignmentDto.DueDateSub;
                assignment.StudentId = assignmentDto.StudentId;



                _dbContext.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpDelete("Delete")]
        public IActionResult Delete(long Id)
        {
            try
            {
                var assignment = _dbContext.Assignments.FirstOrDefault(x => x.Id == Id);
                if (assignment == null)
                {
                    return BadRequest("Assignment Does Not Exist");

                }
                _dbContext.Assignments.Remove(assignment);
                _dbContext.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
