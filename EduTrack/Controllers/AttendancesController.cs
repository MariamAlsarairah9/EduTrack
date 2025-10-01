using EduTrack.DTOs.Attendance;
using EduTrack.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace EduTrack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttendancesController : ControllerBase
    {
        private ETDbContext _dbContext;

        public AttendancesController(ETDbContext dbContext) //Constructor
        {
            _dbContext = dbContext;
        }


        [HttpGet("GetAll")]
        public IActionResult GetAll([FromQuery] FilterAttendancesDto filterDto ) 
        {
            try
            {
                var data = from attendance in _dbContext.Attendances
                           from student in _dbContext.Students.Where(x => x.Id == attendance.StudentId) //Join
                           where (filterDto.Id == null || attendance.Id == filterDto.Id)
                           orderby attendance.Id
                           select new AttendanceDto
                           {
                               Id = attendance.Id,
                               DayAbsent = attendance.DayAbsent,
                               StudentId = attendance.StudentId
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
                var attendance = _dbContext.Attendances.Select(attendance => new AttendanceDto
                {
                    Id = attendance.Id,
                    DayAbsent = attendance.DayAbsent,
                    StudentId = attendance.StudentId,
                }).FirstOrDefault(x => x.Id == Id);


                return Ok(attendance);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Add")]

        public IActionResult Add([FromBody] SaveAttendanceDto attendanceDto)
        {
            try
            {

                var attendance = new Attendance()
                {
                    Id = 0,
                    DayAbsent = attendanceDto.DayAbsent,
                    StudentId = attendanceDto.StudentId,
                };
                _dbContext.Attendances.Add(attendance);
                _dbContext.SaveChanges();
                return Ok();


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("Update")]
        public IActionResult Update(SaveAttendanceDto attendanceDto)
        {
            try
            {
                var attendance = _dbContext.Attendances.FirstOrDefault(x => x.Id == attendanceDto.Id);
                if (attendance == null)
                    return BadRequest("Attendance Not Found!");

                attendance.Id = attendanceDto.Id;
                attendance.DayAbsent = attendanceDto.DayAbsent;
                attendance.StudentId = attendanceDto.StudentId;

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
                var attendance = _dbContext.Attendances.FirstOrDefault(x => x.Id == Id);
                if (attendance == null)
                {
                    return BadRequest("Attendance Does Not Exist");

                }
                _dbContext.Attendances.Remove(attendance);
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
