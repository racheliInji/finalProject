using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    [RoutePrefix("User")]
    public class UserController : ApiController
    {
        [Route("Login")]
        [HttpGet]
        public string Login(string name, string password)
        {
            string token = null;
            try
            {
                token = BL.UserBl.Login(name, password);
                if (token != null)
                {
                    token = token + (Int32.Parse(password) * 12345678910).ToString();
                    return token;
                }
                return "notfound";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }
        [Route("sendEmails")]
        [HttpGet]
        public IHttpActionResult sendEmails(string firstName, string lastName, string email)
        {

            try
            {
                BL.UserBl.sendEmails(firstName, lastName, email);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

       
        [HttpGet]
        [Route("forgetPassword")]
        public IHttpActionResult ForgetPassword(string email)
        {

            try
            {
                BL.UserBl.ForgetPassword(email);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }
      
        [Route("GetUserById/{id}")]
        [HttpGet]
        public IHttpActionResult GetUserById(int id)
        {
            try
            {
                var q = BL.UserBl.GetUserById(id);
                if (q != null)
                    return Ok(q);
                return NotFound();
            }
            catch
            {
                return BadRequest();
            }

        }
        [HttpGet]
        [Route("token")]
        public IHttpActionResult GetUser(string name, string password)
        {

            try
            {
                var q = BL.UserBl.GetUsers();
                if (q != null)
                    return Ok(q);
                return NotFound();
            }
            catch
            {
                return BadRequest();
            }

        }
        [HttpGet]
        [Route("alluser")]
        public IHttpActionResult GetUser()
        {

            try
            {
                var q = BL.UserBl.GetUsers();
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
        [Route("adduser")]
        public IHttpActionResult AddUser(UserDTO user)
        {

            try
            {
                BL.UserBl.AddUser(user);
                return Ok();

            }
            catch (Exception)
            {

                throw;
            }

        }





        //// GET: api/User
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/User/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/User
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/User/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/User/5
        //public void Delete(int id)
        //{
        //}
    }
}

