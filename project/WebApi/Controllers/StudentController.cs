using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
namespace WebApi.Controllers
{
    [RoutePrefix("Student")]
    public class StudentController : ApiController
    {
        [HttpPost]
        [Route("AddStudent")]
        public IHttpActionResult AddStudent(StudentDTO.UserAndStudentDTO student)
        {
            try
            {
                BL.StudentBL.AddStudent(student);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }

        }
        [HttpGet]
        [Route("GetStudent")]
        public IHttpActionResult GetStudents()
        {

            try
            {
                var q = BL.StudentBL.GetStudents();
                if (q != null)
                    return Ok(q);
                return NotFound();
            }
            catch (Exception)
            {

                throw;
            }

        }
        [HttpGet]
        [Route("getStudentById/{id}")]
        public IHttpActionResult getStudentById(int id)
        {

            try
            {
                var student = BL.StudentBL.getStudentAndUserById(id);
                if (student != null)
                    return Ok(student);
                return NotFound();
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }
        [HttpPut]
        [Route("updateStudent")]
        public IHttpActionResult updateStudent(StudentDTO.UserAndStudentDTO userAndStudentDTO)
        {

            try
            {
                 BL.StudentBL.updateStudent(userAndStudentDTO);
                return Ok();
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }

          [HttpDelete]
        [Route("deleteStudent/{id}")]
        public IHttpActionResult Delete(int id)
        {

            try
            {
                BL.StudentBL.DeleteTeacher(id);
                return Ok("בוצעה בהצלחה");
            }
            catch
            {
                return BadRequest("יש תקלה");

            }

        }

    }
}
