using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    [RoutePrefix("Schedule")]
    public class ScheduleController : ApiController
    {
        [HttpPost]
        [Route("addLesson")]
        public IHttpActionResult AddLesson(ScheduleDTO lesson)
        {
            try
            {
                BL.ScheduleBL.AddLesson(lesson);
                return Ok();

            }
            catch (Exception)
            {

                return BadRequest();
            }

        }
        [HttpGet]
        [Route("GetLessonsByteacherId/{id}")]
        public IHttpActionResult GetLessonsByteacherId(int id)

        {

            try
            {
                var q = BL.ScheduleBL.GetLessonsByteacherId(id);
                if (q != null)
                    return Ok(q);
                return NotFound();
            }
            catch
            {
                return BadRequest();

            }

        }
    }
}
