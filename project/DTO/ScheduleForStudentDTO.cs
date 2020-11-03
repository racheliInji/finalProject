using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class ScheduleForStudentDTO:ScheduleDTO.ScheduleDTOWithStudentName
    {
        public string TeacherName { get; set; }
        public string Notes { get; set; }


    }
}
