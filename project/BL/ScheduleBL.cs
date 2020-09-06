using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ScheduleBL
    {
        public static void AddLesson(ScheduleDTO lesson)
        {
            DAL.ScheduleDAL.AddLesson(Converters.ScheduleConvert.GetSchedule(lesson));
        }

        public static List<ScheduleDTO.ScheduleDTOWithStudentName> GetLessonsByteacherId(int id)
        {
            List<ScheduleDTO.ScheduleDTOWithStudentName> list = new List<ScheduleDTO.ScheduleDTOWithStudentName>();
            var q = Converters.ScheduleConvert.DtoScheduleList(DAL.ScheduleDAL.GetLessons()).Where(i => i.TeacherId == id).ToList();
            foreach (var i in q)
            {
                var q2 = DAL.UserDal.GetUsers().FirstOrDefault(e => e.id == i.StudentId);
                ScheduleDTO.ScheduleDTOWithStudentName scheduleDTOWithStudent = new ScheduleDTO.ScheduleDTOWithStudentName()
                {
                    Date = i.Date,
                    starTtime = i.starTtime,
                    Subject = i.Subject,
                    TeacherId = i.TeacherId,
                    StudentName = q2.firstName + ' ' + q2.lastName
                };
                list.Add(scheduleDTOWithStudent);
            }
          
  
            return list;
        }
    
    }
}
