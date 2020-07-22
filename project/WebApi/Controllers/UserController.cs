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
        [HttpPut]
        public string Login(UserDTO  user)
        { 
            return BL.UserBl.Login(user.firstName, user.password);
            
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
