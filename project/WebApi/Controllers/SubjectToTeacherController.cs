using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
namespace WebApi.Controllers
{    [RoutePrefix("SubjectToTeacher")]
    public class SubjectToTeacherController : ApiController
    {
        [HttpPost]
        [Route("addSubjectToTeacher")]
        public IHttpActionResult AddSubjectToTeacher(SubjectToTeacherDTO SubjectToTeacher)
        {

            try
            {
                return Ok(BL.SubjectToTeacherBL.AddSubjectToTeacher(SubjectToTeacher));

            }
            catch(Exception e)
            {


                return BadRequest(e.ToString());
            }

        }
    }
}
