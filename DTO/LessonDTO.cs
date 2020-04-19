using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class LessonDTO
    {
        public int LessonId { get; set; }
        public int ScheduleId { get; set; }
        public System.DateTime Date { get; set; }
        public string LessonDescribe { get; set; }
        public string H_W { get; set; }

    }
}
