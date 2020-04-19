using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    class HourConvert
    {
        public static Hour GetHour(DTO.HourDTO HourDto)
        {
            Hour Hour = new Hour();
            Hour.Id = HourDto.Id;
            Hour.TeacherId = HourDto.TeacherId;
            Hour.Day = HourDto.Day;
            Hour.Starttime = HourDto.Starttime;
            Hour.Endtime = HourDto.Endtime;

            return Hour;


        }
        public static HourDTO GetHourDTO(Hour Hour)
        {
            HourDTO HourDTO = new HourDTO();
            HourDTO.Id = Hour.Id;
            HourDTO.TeacherId = Hour.TeacherId;
            HourDTO.Day = Hour.Day;
            HourDTO.Starttime = Hour.Starttime;
            HourDTO.Endtime = Hour.Endtime;

            return HourDTO;
        }
    }
}
