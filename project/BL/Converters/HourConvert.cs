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
         //   Hour.Id = HourDto.TeacherId;
            Hour.TeacherId = HourDto.TeacherId;
            Hour.Date = HourDto.Date;
            Hour.Starttime = TimeSpan.Parse(HourDto.Starttime);
          //  Hour.Endtime = HourDto.Endtime;

            return Hour;


        }
        public static HourDTO GetHourDTO(Hour Hour)
        {
            HourDTO HourDTO = new HourDTO();
           // HourDTO.Id = Hour.Id;
            HourDTO.TeacherId = Hour.TeacherId;
            HourDTO.Date = Hour.Date;
            HourDTO.Starttime = Hour.Starttime.ToString();
           // HourDTO.Endtime = Hour.Endtime;

            return HourDTO;
        }
    }
}
