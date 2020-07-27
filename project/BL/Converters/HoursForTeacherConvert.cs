using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Globalization;
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
            HoursForTeacher.Day = HoursForTeacherDto.Day;
            HoursForTeacher.Starttime = TimeSpan.Parse(HoursForTeacherDto.Starttime);
            HoursForTeacher.Endtime = TimeSpan.Parse(HoursForTeacherDto.Endtime);
            HoursForTeacher.TeacherId = HoursForTeacherDto.TeacherId;

            //foreach (var item in DAL.UserDal.GetUsers())
            //{
            //    if (HoursForTeacherDto.password == item.password && HoursForTeacherDto.teacherName == item.firstName)
            //    {
            //        HoursForTeacher.TeacherId = item.id;
            //    }
            //}
            return HoursForTeacher;


        }

        internal static List<HoursForTeacherDTO> DTOHoursForTeacherList(List<HoursForTeacherDTO> list)
        {
            throw new NotImplementedException();
        }

        public static HoursForTeacherDTO GetHoursForTeacherDTO(HoursForTeacher HoursForTeacher)
        {
            HoursForTeacherDTO HoursForTeacherDTO = new HoursForTeacherDTO();
            //HoursForTeacherDTO.HoursForTeacherId = HoursForTeacher.HoursForTeacherId;
            HoursForTeacherDTO.Day = HoursForTeacher.Day;
            HoursForTeacherDTO.Starttime = HoursForTeacher.Starttime.ToString();
            HoursForTeacherDTO.Endtime = HoursForTeacher.Endtime.ToString();
            HoursForTeacherDTO.TeacherId = HoursForTeacher.TeacherId;

            //foreach (var item in DAL.UserDal.GetUsers())
            //{
            //    if (item.id == HoursForTeacher.TeacherId)
            //    {
            //        HoursForTeacherDTO.password = item.password;
            //        HoursForTeacherDTO.teacherName = item.firstName;
            //    }
            //}
            return HoursForTeacherDTO;
        }
        public static List<HoursForTeacher> HoursForTeacherList(List<DTO.HoursForTeacherDTO> list)
        {
            List<HoursForTeacher> hoursForTeacher = new List<HoursForTeacher>();
            foreach (var item in list)
            {
                hoursForTeacher.Add(GetHoursForTeacher(item));
            }
            return hoursForTeacher;
        }
        public static List<HoursForTeacherDTO> DTOHoursForTeacherList(List<HoursForTeacher> list)
        {
            List<HoursForTeacherDTO> hoursForTeacher = new List<HoursForTeacherDTO>();
            foreach (var item in list)
            {
                hoursForTeacher.Add(GetHoursForTeacherDTO(item));
            }
            return hoursForTeacher;
        }
    }
}
