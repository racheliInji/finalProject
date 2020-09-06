using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class HoursForTeacherDTO
    {
        //public int HoursForTeacherId { get; set; }
        public int TeacherId { get; set; }
        //public string teacherName { get; set; }
        //public string password { get; set; }
        public string Day { get; set; }
        public string Starttime { get; set; }
        public string Endtime { get; set; }

        public class AvailableHours
        {
            public int TeacherId { get; set; }
            public string Day { get; set; }
            public DateTime Date { get; set; }
            public string Starttime { get; set; }
            public int timeInNUm { get; set; }
        }

        //public System.TimeSpan Starttime { get; set; }
        //public System.TimeSpan Endtime { get; set; }
    }
}
