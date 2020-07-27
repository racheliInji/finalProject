using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DTO;
namespace WebApi.Controllers
{
    
       [RoutePrefix("HoursForTeacher")]
    public class HourForTeacherController : ApiController
    {
        [HttpPost]
        [Route("addHourandDay")]
        public IHttpActionResult AddHourAndDay(HoursForTeacherDTO HoursForTeacher)
        {

            try
            {
                BL.HoursForTeacherBL.HoursForTeacherAdd(HoursForTeacher);
                return Ok();

            }
            catch 
            {


                return BadRequest();
            }

        }
        [HttpGet]
        [Route("hoursAndDaysForTeacher")]
        public IHttpActionResult GetHoursForTeacher()
        {

            try
            {
                var q = BL.HoursForTeacherBL.GetHoursForTeacher();
                if (q != null)
                    return Ok(q);
                return NotFound();
            }
            catch 
            {
                return BadRequest();

            }

        }
        [HttpPost]
        [Route("getTeachersDaysAndHours")]
        public IHttpActionResult getTeachersDaysAndHours(TeacherDTO.TeacherAndSubjectDTO TeacherAndSubjectDTO)
        {
            try
            {
                var q = BL.HoursForTeacherBL.getTeachersDaysAndHours(TeacherAndSubjectDTO);
                if (q != null)
                    return Ok(q);
                else
                    return NotFound();
            }
            catch
            {
                return BadRequest();

            }


        }
        [HttpPut]
        [Route("getIdHour")]
        public int getIdHour(HoursForTeacherDTO HoursForTeacherDTO)
        {

            int x = BL.HoursForTeacherBL.getIdHour(HoursForTeacherDTO);
            return x;
        }
        [HttpDelete]
        [Route("removeHourAndDay/{id}")]
        public IHttpActionResult Delete(int id)
        {

            try
            {
                BL.HoursForTeacherBL.DeleteHoursAndDaysForTeacher(id);
                return Ok();
            }
            catch
            {
                return BadRequest();

            }

        }
    }
}
