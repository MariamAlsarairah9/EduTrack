using EduTrack.DTOs.Grrade;
using EduTrack.DTOs.Grrades;
using EduTrack.DTOs.Parent;
using EduTrack.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace EduTrack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GradesController : ControllerBase
    {
        private ETDbContext _dbContext;
        public GradesController(ETDbContext dbContext) //Constructor
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll([FromQuery] FilterGradesDto filterDto)
        {
            try
            {
                var data = from grade in _dbContext.Grades
                           from student in _dbContext.Students.Where(x => x.Id == grade.StudentId) //Join
                           from lookup in _dbContext.Lookups.Where(x => x.Id == grade.SubjectId)// Join
                           where (filterDto.Id == null || grade.Id == filterDto.Id) &&
                                 (filterDto.SubjectName == null || grade.SubjectName.ToUpper().Contains(filterDto.SubjectName.ToUpper()))
                           orderby grade.Id
                           select new GradeDto
                           {
                               Id = grade.Id,
                               SubjectName = grade.SubjectName,
                               score = grade.score,
                               StudentId = grade.StudentId, // Or student.Id
                               SubjectId = grade.SubjectId,

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
                var grade = _dbContext.Grades.Select(grade => new GradeDto
                {
                    Id = grade.Id,
                    SubjectName = grade.SubjectName,
                    score = grade.score,
                    StudentId = grade.StudentId,
                    SubjectId = grade.SubjectId,


                }).FirstOrDefault(x => x.Id == Id);


                return Ok(grade);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Add")]

        public IActionResult Add([FromBody] SaveGradeDto gradeDto)
        {
            try
            {

                var grade = new Grade()
                {
                    Id = gradeDto.Id,   
                    SubjectName = gradeDto.SubjectName,
                    score = gradeDto.score,
                    StudentId = gradeDto.StudentId,
                    SubjectId = gradeDto.SubjectId,

                };
                _dbContext.Grades.Add(grade);
                _dbContext.SaveChanges();
                return Ok();


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("Update")]
        public IActionResult Update(SaveGradeDto gradeDto)
        {
            try
            {
                var grade = _dbContext.Grades.FirstOrDefault(x => x.Id == gradeDto.Id);
                if (grade == null)
                {
                    return BadRequest("Grade Not Found!");
                }
                grade.Id = gradeDto.Id;
                grade.score = gradeDto.score;
                grade.SubjectName = gradeDto.SubjectName;
                grade.StudentId = gradeDto.StudentId;
                grade.SubjectId = gradeDto.SubjectId;




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
                var grade = _dbContext.Grades.FirstOrDefault(x => x.Id == Id);
                if (grade == null)
                {
                    return BadRequest("Grade Does Not Exist");

                }
                _dbContext.Grades.Remove(grade);
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
