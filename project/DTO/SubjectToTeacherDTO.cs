using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class SubjectToTeacherDTO
    {
        public int TeacherId { get; set; }
        public int SubjectId { get; set; }
        public decimal PriceForLesson { get; set; }
        public int LessonLength { get; set; }
        public string GradesRange { get; set; }

    }
}
