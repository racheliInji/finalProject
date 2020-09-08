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
            foreach (var item in Converters.HoursForTeacherConvert.DTOHoursForTeacherList(DAL.HoursForTeacherDAL.GetHoursForTeacher()))
            {
                if (item.TeacherId == hoursForTeacherDTO.TeacherId)
                {
                    if (item.Day == hoursForTeacherDTO.Day && item.Endtime == hoursForTeacherDTO.Endtime && item.Starttime == hoursForTeacherDTO.Starttime)
                    {

                        return BL.TeacherBL.GetTeacherId(item);
                    }
                }
            }
            return 0;
        }

        public static List<HoursForTeacherDTO> GetHoursForTeacherById(int id)
        {
            List<HoursForTeacherDTO> list = new List<HoursForTeacherDTO>();
            foreach (var item in Converters.HoursForTeacherConvert.DTOHoursForTeacherList(DAL.HoursForTeacherDAL.GetHoursForTeacher()))
            {
                if (item.TeacherId == id)
                {
                    list.Add(item);
                }
            }
            return list.ToList();
        }
        public static int ConvertDay(string day)
        {
            switch (day)
            {
                case "ראשון":
                    return 0;
                case "שני":
                    return 1;
                case "שלישי":
                    return 2;
                case "רביעי":
                    return 3;
                case "חמישי":
                    return 4;
                case "שישי":
                    return 5;
            }
            return 0;
        }
        public static int ConvertTime(string time)
        {
            switch (time)
            {
                case "08:00:00":
                    return 8;
                case "09:00:00":
                    return 9;
                case "10:00:00":
                    return 10;
                case "11:00:00":
                    return 11;
                case "12:00:00":
                    return 12;
                case "13:00:00":
                    return 13;
                case "14:00:00":
                    return 14;
                case "15:00:00":
                    return 15;
                case "16:00:00":
                    return 16;
                case "17:00:00":
                    return 17;
                case "18:00:00":
                    return 18;
                case "19:00:00":
                    return 19;
                case "20:00:00":
                    return 20;
                case "21:00:00":
                    return 21;
                case "22:00:00":
                    return 22;
            }
            return 0;
        }
        public static DateTime GetDate(int day)
        {
            int d = (int)System.DateTime.Now.DayOfWeek;
            DateTime date = DateTime.Now;
            int diffDays = d - day;
            DateTime newdate = date.AddDays(-diffDays);
            return newdate;
        }
        public static bool isInVacation(DateTime date,int teacherId)
        {
          var flag=  DAL.VacationDAl.getVacation().Find(i => i.StartDate < date && i.EndDate > date);
            if (flag != null)
                return false;
            return true;
        }
        public static bool checkDate(DateTime date, int teacherId)
        {
            if (date < DateTime.Now)
            {
                return false;
            }
            if (isInVacation(date, teacherId) == false)
                return false;
            foreach (var item in DAL.ScheduleDAL.GetLessons())
            {
                if (item.TeacherId == teacherId && item.Date == date.Date)
                {
                    return false;
                }
            }
            return true;

        }
        public static List<HoursForTeacherDTO.AvailableHours> getTeachersDaysAndHours(TeacherDTO.TeacherAndSubjectDTO teacherAndSubjectDTO)
        {
            List<HoursForTeacherDTO.AvailableHours> list = new List<HoursForTeacherDTO.AvailableHours>();
            foreach (var teacher in DAL.HoursForTeacherDAL.GetHoursForTeacher())
            {
                if (teacher.TeacherId == teacherAndSubjectDTO.userId)
                {
                    int day = ConvertDay(teacher.Day);
                    //GetDate(day);
                    for (int i = 0; i < 12; i++)
                    {
                        DateTime newDate = GetDate(day).AddDays(i * 7);
                        if (checkDate(newDate, teacher.TeacherId) == true)
                        {
                            HoursForTeacherDTO.AvailableHours AvailableHours = new HoursForTeacherDTO.AvailableHours()
                            {
                                Date = newDate,
                                TeacherId = teacher.TeacherId,
                                Day = teacher.Day,
                                Starttime = teacher.Starttime.ToString(),
                                timeInNUm = ConvertTime(teacher.Starttime.ToString())
                            };
                            list.Add(AvailableHours);
                        }
                    }
                }
            }
            return list;
        }
    }

}
