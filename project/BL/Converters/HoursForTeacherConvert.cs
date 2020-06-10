using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
   public class HoursForTeacherConvert
    {
        public static HoursForTeacher GetHoursForTeacher(DTO.HoursForTeacherDTO HoursForTeacherDto)
        {
            HoursForTeacher HoursForTeacher = new HoursForTeacher();
            HoursForTeacher.HoursForTeacherId = HoursForTeacherDto.HoursForTeacherId;
            HoursForTeacher.TeacherId = HoursForTeacherDto.TeacherId;
            HoursForTeacher.Day = HoursForTeacherDto.Day;
            HoursForTeacher.Starttime = HoursForTeacherDto.Starttime;
            HoursForTeacher.Endtime = HoursForTeacherDto.Endtime;

            return HoursForTeacher;
   

}
        public static HoursForTeacherDTO GetHoursForTeacherDTO(HoursForTeacher HoursForTeacher)
        {
            HoursForTeacherDTO HoursForTeacherDTO = new HoursForTeacherDTO();
            HoursForTeacherDTO.HoursForTeacherId = HoursForTeacher.HoursForTeacherId;
            HoursForTeacherDTO.TeacherId = HoursForTeacher.TeacherId;
            HoursForTeacherDTO.Day = HoursForTeacher.Day;
            HoursForTeacherDTO.Starttime = HoursForTeacher.Starttime;
            HoursForTeacherDTO.Endtime = HoursForTeacher.Endtime;


            return HoursForTeacherDTO;
        }
    }
}
