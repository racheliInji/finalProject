using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
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
                    StudentName = q2.firstName + ' ' + q2.lastName,
                    ScheduleId=i.ScheduleId,
                    studentId=q2.id

                };
                list.Add(scheduleDTOWithStudent);
            }
          
  
            return list;
        }

        public static void sendEmail(ScheduleDTO schedule)
        {
            SmtpClient client = new SmtpClient();
            client.Port = 587;
            client.Host = "smtp.gmail.com";
            client.EnableSsl = true;
            client.Timeout = 1000000;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            client.Credentials = new System.Net.NetworkCredential("miniclass909@gmail.com", "diniracheli909");

            try
            {
                var q = DAL.UserDal.GetUsers().FirstOrDefault(i => i.id == schedule.StudentId);
                var q2 = DAL.UserDal.GetUsers().FirstOrDefault(i => i.id == schedule.TeacherId);
                MailMessage mm = new MailMessage("miniclass909@gmail.com", q.email, "ביטול שיעור"+schedule.Subject, "");
                mm.Body = " הי " + q.firstName + ' ' + q.lastName +
                   " \n" + " שיעור " + schedule.Subject + " של המורה  " + q2.firstName + ' ' + q2.lastName + " בתאריך " + schedule.Date + " בשעה " + schedule.starTtime+" התבטל!!!!!! "
                +"\n"+ "<a href='http://localhost:4200/חיפוש'> לקביעת שיעור אחר</a>";
                mm.BodyEncoding = UTF8Encoding.UTF8;
                //  mm. = MailFormat.Html;
                mm.IsBodyHtml = true;
                mm.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;

                client.Send(mm);
            }
            catch (Exception e)
            {

            }

        }

        public static ScheduleDTO deleteLesson(int scheduleId)
        {
          return Converters.ScheduleConvert.GetScheduleDTO( DAL.ScheduleDAL.deleteLesson(scheduleId));
        }
    }
}
