using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class HoursForTeacherDTO
    {
        public int HoursForTeacherId { get; set; }
        public int TeacherId { get; set; }
        public string Day { get; set; }
        public System.TimeSpan Starttime { get; set; }
        public System.TimeSpan Endtime { get; set; }
    }
}
