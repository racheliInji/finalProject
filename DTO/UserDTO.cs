using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public class UserDTO
    {
        public int userId { get; set; }
        public string tz { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string city { get; set; }
        public string street { get; set; }
        public int numhouse { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string phone { get; set; }
        public class userLogin
        {
            public string firstName { get; set; }
            public string password { get; set; }
        }



    }
}
