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
        public string Subject { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string starTtime { get; set; }
        public class ScheduleDTOWithStudentName
        {
            public int ScheduleId { get; set; }
            public int studentId { get; set; }

            public int TeacherId { get; set; }
            public string StudentName { get; set; }
            public string Subject { get; set; }
            public Nullable<System.DateTime> Date { get; set; }
            public string starTtime { get; set; }
        }
    }
}
