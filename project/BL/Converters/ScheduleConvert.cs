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
            Schedule.Hour = ScheduleDto.starTtime;
            Schedule.StudentId = ScheduleDto.StudentId;
            Schedule.Subject = ScheduleDto.Subject;
          //  Schedule.ScheduleId = ScheduleDto.ScheduleId;
            return Schedule;
        }
        public static ScheduleDTO GetScheduleDTO(Schedule Schedule)
        {
            ScheduleDTO ScheduleDTO = new ScheduleDTO();
            ScheduleDTO.Date = Schedule.Date;
            ScheduleDTO.TeacherId = Schedule.TeacherId;
            ScheduleDTO.starTtime = Schedule.Hour;
            ScheduleDTO.StudentId = Schedule.StudentId;
            ScheduleDTO.Subject = Schedule.Subject;
            ScheduleDTO.ScheduleId = Schedule.ScheduleId;
            return ScheduleDTO;
        }
        public static List<Schedule> ScheduleList(List<DTO.ScheduleDTO> list)
        {
            List<Schedule> Schedules = new List<Schedule>();
            foreach (var item in list)
            {
                Schedules.Add(GetSchedule(item));
            }
            return Schedules;
        }
        public static List<ScheduleDTO> DtoScheduleList(List<Schedule> list)
        {
            List<ScheduleDTO> Schedules = new List<ScheduleDTO>();
            foreach (var item in list)
            {
                Schedules.Add(GetScheduleDTO(item));
            }
            return Schedules;
        }

    }
}

