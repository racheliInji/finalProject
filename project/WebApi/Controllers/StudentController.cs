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
    }
}
