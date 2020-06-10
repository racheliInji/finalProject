using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class ScheduleDTO
    {
        public int ScheduleId { get; set; }
        public int TeacherId { get; set; }
        public int StudentId { get; set; }
        public int SubjectId { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string Hour { get; set; }
    }
}
