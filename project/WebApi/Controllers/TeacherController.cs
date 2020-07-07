using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;

namespace WebApi.Controllers
{
    [RoutePrefix("Teacher")]
    public class TeacherController : ApiController
    {
        [HttpGet]
        [Route("GetTeachers")]
        public IHttpActionResult GetTeacher()
        {

            try
            {
                var q = BL.TeacherBL.GetTeacher();
                if (q != null)
                    return Ok(q);
                return NotFound();
            }
            catch (Exception)
            {

                throw;
            }

        }
        [HttpPost]
        [Route("addTeacher")]
        public IHttpActionResult AddUser(TeacherDTO.UserAndTeacherDTO teacher)
        {

            try
            {
                BL.TeacherBL.AddTeacher(teacher);
                return Ok();

            }
            catch (Exception)
            {

                throw;
            }

        }
    }
}
