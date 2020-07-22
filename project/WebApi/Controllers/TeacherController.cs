using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
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
                var q = BL.TeacherBL.GetTeachers();
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
        [Route("GetTeacherAndSubject")]
        public IHttpActionResult GetTeacherAndSubject()
        {

            try
            {
                var q = BL.TeacherBL.GetTeacherAndSubject();
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
        [HttpPut]
        [Route("getTeacher")]
        public IHttpActionResult getTeacher(UserDTO.userLogin user)
        {

            try
            {
                var teacher = BL.TeacherBL.getTeacher(user);
               
                if (teacher != null)
                    return Ok(teacher);
                return NotFound();
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }
        [HttpPut]
        [Route("updateTeacher")]
        public IHttpActionResult updateTeacher(TeacherDTO.UserAndTeacherDTO userAndTeacherDTO)
        {

            try
            {
                BL.TeacherBL.updateTeacher(userAndTeacherDTO);
                return Ok();
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }

        [Route("addfile")]
        [HttpPost]
        public IHttpActionResult UploadDocument()
        {
            try
            {
                var file = HttpContext.Current.Request.Files.Count > 0 ?
                HttpContext.Current.Request.Files[0] : null;
                if (file != null && file.ContentLength > 0)
                {
                    //HttpContext.Current.Server.MapPath("~/ResourcesFiles")
                    var fileName = Path.GetFileName(file.FileName);
                    var path = Path.Combine("C: \\Users\\USER\\Desktop\\myproject\\angular\\src\\assets"
             , fileName );

                    try
                    {
                        using (var stream = new FileStream(path, FileMode.Create))
                        {
                            file.InputStream.CopyTo(stream);
                            stream.Close();
                            //BL.TeacherBL.addFile(path);

                        }

                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex.ToString());

                    }
                    //BL.TeacherBL.addFile(path);
                }
                return Ok("הקובץ נשמר בהצלחה!!!!");
            }
            catch (Exception ex)
            {

                return BadRequest("יש תקלה בשמירת הקובץ נסה קובץ אחר");
            }


            //return file != null ? "/ResourcesFiles/" + file.FileName : null;



        }
    }
}
