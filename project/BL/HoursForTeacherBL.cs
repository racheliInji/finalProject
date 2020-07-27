using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace BL
{
    public class HoursForTeacherBL
    {
        public static void HoursForTeacherAdd(HoursForTeacherDTO hoursForTeacher)
        {

            DAL.HoursForTeacherDAL.HoursForTeacherAdd(Converters.HoursForTeacherConvert.GetHoursForTeacher(hoursForTeacher));
        }

        public static List<HoursForTeacherDTO> GetHoursForTeacher()
        {
            return Converters.HoursForTeacherConvert.DTOHoursForTeacherList(DAL.HoursForTeacherDAL.GetHoursForTeacher());
        }

        public static void DeleteHoursAndDaysForTeacher(int id)
        {
            DAL.HoursForTeacherDAL.DeleteHoursAndDaysForTeacher(id);
        }

        public static int getIdHour(HoursForTeacherDTO hoursForTeacherDTO)
        {
            foreach(var item in Converters.HoursForTeacherConvert.DTOHoursForTeacherList(DAL.HoursForTeacherDAL.GetHoursForTeacher()))
            {
                if(item.TeacherId== hoursForTeacherDTO.TeacherId)
                {
                    if(item.Day== hoursForTeacherDTO.Day&&item.Endtime== hoursForTeacherDTO.Endtime&&item.Starttime== hoursForTeacherDTO.Starttime)
                    {

                      return  BL.TeacherBL.GetTeacherId(item);
                    }
                }
            }
            return 0;
        }

        public static List<HoursForTeacherDTO> getTeachersDaysAndHours(TeacherDTO.TeacherAndSubjectDTO teacherAndSubjectDTO)
        {
            List<HoursForTeacherDTO> list = new List<HoursForTeacherDTO>();
            foreach(var teacher in DAL.HoursForTeacherDAL.GetHoursForTeacher())
            {
                if(teacher.TeacherId== teacherAndSubjectDTO.userId)
                {
                    list.Add( Converters.HoursForTeacherConvert.GetHoursForTeacherDTO(teacher));
                }
            }
            return list;
        }
    }

}
