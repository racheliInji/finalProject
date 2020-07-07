using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
 public   class StudentDTO
    {
        public int StudentId { get; set; }
        public int IdGrade { get; set; }
        public string Level { get; set; }
        public class UserAndStudentDTO
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
            public int StudentId { get; set; }
            public int IdGrade { get; set; }
            public string Level { get; set; }
        }
    }
}
