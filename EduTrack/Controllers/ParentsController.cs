using EduTrack.DTOs.Parent;
using EduTrack.DTOs.Student;
using EduTrack.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EduTrack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParentsController : ControllerBase
    {
        private ETDbContext _dbContext;
        public ParentsController(ETDbContext dbContext) //Constructor
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll([FromQuery] FilterParentsDto filterDto)
        {
            try
            {
                var data = from parent in _dbContext.Parents
                           where (filterDto.Id == null || parent.Id == filterDto.Id) &&
                                 (filterDto.Name == null || parent.Name.ToUpper().Contains(filterDto.Name.ToUpper()))
                           orderby parent.Id
                           select new ParentDto
                           {
                               Id = parent.Id,
                               Name = parent.Name,
                               Email = parent.Email,
                               Phone = parent.Phone,
                               StudentId = parent.StudentId


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
                var parent = _dbContext.Parents.Select(parent => new ParentDto
                {
                    Id = parent.Id,
                    Name = parent.Name,
                    Email = parent.Email,
                    Phone = parent.Phone,
                    StudentId = parent.StudentId

                }).FirstOrDefault(x => x.Id == Id);


                return Ok(parent);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Add")]

        public IActionResult Add([FromBody] SaveParentDto parentDto)
        {
            try
            {

                var parent = new Parent()
                {
                    Id = 0,
                    Name = parentDto.Name,
                    Email = parentDto.Email,
                    Phone = parentDto.Phone,
                    StudentId = parentDto.StudentId

                };
                _dbContext.Parents.Add(parent);
                _dbContext.SaveChanges();
                return Ok();


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("Update")]
        public IActionResult Update(SaveParentDto parentDto)
        {
            try
            {
                var parent = _dbContext.Parents.FirstOrDefault(x => x.Id == parentDto.Id);
                if (parent == null)
                {
                    return BadRequest("Parent Not Found!");
                }
                parent.Name = parentDto.Name;
                parent.Email = parentDto.Email;
                parent.Phone = parentDto.Phone;
                parent.StudentId = parentDto.StudentId;




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
                var parent = _dbContext.Parents.FirstOrDefault(x => x.Id == Id);
                if (parent == null)
                {
                    return BadRequest("Parent Does Not Exist");

                }
                _dbContext.Parents.Remove(parent);
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
