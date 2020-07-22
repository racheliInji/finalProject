using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class TeacherDTO
    {
        public int TeacherId { get; set; }
        public string Qualifications { get; set; }
        public class UserAndTeacherDTO
        {
            public string Qualifications { get; set; }
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
            //public UserDTO userDTO { get; set; }
            //public TeacherDTO teacherDTO { get; set; }
        };
        public class TeacherAndSubjectDTO
        {
            public string Qualifications { get; set; }
            public int userId { get; set; }
            public string firstName { get; set; }
            public string lastName { get; set; }
            public string city { get; set; }
            public string street { get; set; }
            public int numhouse { get; set; }
            public string email { get; set; }
            public string password { get; set; }
            public string phone { get; set; }
            public string SubjectName { get; set; }
            public int PriceForLesson { get; set; }
            public int lessonlength { get; set; }
            public string GradesRange { get; set; }
        }


    }
}
