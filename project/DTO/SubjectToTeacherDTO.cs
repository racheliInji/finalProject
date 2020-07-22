using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class SubjectToTeacherDTO
    {
        public string teacherName { get; set; }
        public string password { get; set; }
        public string SubjectName{ get; set; }
        public int PriceForLesson { get; set; }
        public int LessonLength { get; set; }
        public string GradesRange { get; set; }

    }
}
