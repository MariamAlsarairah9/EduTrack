using EduTrack.DTOs;
using EduTrack.DTOs.Teacher;
using EduTrack.DTOs.TeacherDto;
using EduTrack.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace EduTrack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeachersController : ControllerBase
    {
        private HrDbContext _dbContext;

        public TeachersController(HrDbContext dbContext) //Constructor
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll([FromQuery] FilterTeachersDto filterDto)
        {
            try
            {
                var data = from teacher in _dbContext.Teachers
                           where (filterDto.Id == null || teacher.Id == filterDto.Id) && 
                                 (filterDto.Name == null || teacher.Name.ToUpper().Contains(filterDto.Name.ToUpper()))
                           orderby teacher.Id 
                           select new TeacherDto
                           {
                               Id = teacher.Id,
                               Name = teacher.Name,
                               Email = teacher.Email,
                               StartDate = teacher.StartDate,
                               Phone = teacher.Phone,

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
                var teacher = _dbContext.Teachers.Select(teacher => new TeacherDto
                {
                    Id = teacher.Id,
                    Name = teacher.Name,
                    StartDate = teacher.StartDate,
                    Phone = teacher.Phone,
                }).FirstOrDefault(x => x.Id == Id);
                                                    

                return Ok(teacher);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Add")]
 
        public IActionResult Add([FromBody] SaveTeacherDto teacherDto)
        {
            try
            {
               
                var teacher = new Teacher()
                {
                    Id = 0,
                    Name = teacherDto.Name,
                    Phone = teacherDto.Phone,
                    Email = teacherDto.Email,
                    StartDate = teacherDto.StartDate,
                    EndDate = teacherDto.EndDate,
                   
                };
                _dbContext.Teachers.Add(teacher);
                _dbContext.SaveChanges(); 
                return Ok(); 


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("Update")]
        public IActionResult Update(SaveTeacherDto teacherDto)
        {
            try
            {
                var teacher = _dbContext.Teachers.FirstOrDefault(x => x.Id == teacherDto.Id); 
                if (teacher == null)
                {
                    return BadRequest("Employee Not Found!"); 
                }
                teacher.Name = teacherDto.Name;
                teacher.Phone = teacherDto.Phone;
                teacher.Email = teacherDto.Email;
                teacher.StartDate = teacherDto.StartDate;
                teacher.EndDate = teacherDto.EndDate;

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
                var teacher = _dbContext.Teachers.FirstOrDefault(x => x.Id == Id);
                if (teacher == null)
                {
                    return BadRequest("Employee Does Not Exist"); 

                }             
                _dbContext.Teachers.Remove(teacher);
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
