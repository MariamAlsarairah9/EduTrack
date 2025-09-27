using EduTrack.DTOs.Student;
using EduTrack.DTOs.Teacher;
using EduTrack.DTOs.TeacherDto;
using EduTrack.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Security.Claims;

namespace EduTrack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private ETDbContext _dbContext;
        public StudentsController(ETDbContext dbContext) //Constructor
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll([FromQuery] FilterStudentsDto filterDto)
        {
            try
            {
                var data = from student in _dbContext.Students
                           where (filterDto.Id == null || student.Id == filterDto.Id) &&
                                 (filterDto.Name == null || student.Name.ToUpper().Contains(filterDto.Name.ToUpper()))
                           orderby student.Id
                           select new StudentDto
                           {
                               Id = student.Id,
                               Name = student.Name,
                               Class = student.Class,
                               GradeLevel = student.GradeLevel

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
                var student = _dbContext.Students.Select(student => new StudentDto
                {
                    Id = student.Id,
                    Name = student.Name,
                    Class = student.Class,
                    GradeLevel = student.GradeLevel

                }).FirstOrDefault(x => x.Id == Id);


                return Ok(student);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Add")]

        public IActionResult Add([FromBody] SaveStudentDto studentDto)
        {
            try
            {

                var student = new Student()
                {
                    Id = 0,
                    Name = studentDto.Name,
                    GradeLevel = studentDto.GradeLevel,
                    Class = studentDto.Class


                };
                _dbContext.Students.Add(student);
                _dbContext.SaveChanges();
                return Ok();


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("Update")]
        public IActionResult Update(SaveStudentDto studentDto)
        {
            try
            {
                var student = _dbContext.Students.FirstOrDefault(x => x.Id == studentDto.Id);
                if (student == null)
                {
                    return BadRequest("Student Not Found!");
                }
                student.Name = studentDto.Name;
                student.GradeLevel = studentDto.GradeLevel;
                student.Class = studentDto.Class;



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
                var student = _dbContext.Students.FirstOrDefault(x => x.Id == Id);
                if (student == null)
                {
                    return BadRequest("Student Does Not Exist");

                }
                _dbContext.Students.Remove(student);
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
