using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
namespace WebApi.Controllers
{
    [RoutePrefix("Hours")]
    public class AddLessonController : ApiController
    {
        [HttpPost]
        [Route("addLesson")]
        public IHttpActionResult AddLesson(HourDTO lesson)
        {

            try
            {
                BL.HourBL.AddLesson(lesson);
                return Ok();

            }
            catch (Exception)
            {

                return BadRequest();
            }

        }
    }
}
