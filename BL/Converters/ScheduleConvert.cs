using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
  public  class ScheduleConvert
    {

        public static Schedule GetSchedule(DTO.ScheduleDTO ScheduleDto)
        {
            Schedule Schedule = new Schedule();
            Schedule.Date = ScheduleDto.Date;
            Schedule.TeacherId = ScheduleDto.TeacherId;
            Schedule.Hour = ScheduleDto.Hour;
            Schedule.StudentId = ScheduleDto.StudentId;
            Schedule.SubjectId = ScheduleDto.SubjectId;
            Schedule.ScheduleId = ScheduleDto.ScheduleId;
            return Schedule;
        }
        public static ScheduleDTO GetScheduleDTO(Schedule Schedule)
        {
            ScheduleDTO ScheduleDTO = new ScheduleDTO();
            ScheduleDTO.Date = Schedule.Date;
            ScheduleDTO.TeacherId = Schedule.TeacherId;
            ScheduleDTO.Hour = Schedule.Hour;
            ScheduleDTO.StudentId = Schedule.StudentId;
            ScheduleDTO.SubjectId = Schedule.SubjectId;
            ScheduleDTO.ScheduleId = Schedule.ScheduleId;
           
            return ScheduleDTO;
        }

    }
}
}
