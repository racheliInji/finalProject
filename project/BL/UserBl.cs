
using DTO;
using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Text;

namespace BL
{
    public class UserBl
    {

        public static string Login(string username, string password)
        {
            var q = Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers());
            foreach (var item in q)
            {
                if (item.firstName == username && item.password == password)//&& item.password == password
                {
                    var q2 = DAL.TeacherDAL.GetTeachers();
                    foreach (var t in q2)
                    {
                        if (item.userId == t.TeacherId)
                        {
                            return '0' + (item.userId * 2).ToString() + "as";
                        }
                    }

                    var q3 = DAL.StudentDAL.GetStudents();
                    foreach (var s in q3)
                    {
                        if (item.userId == s.StudentId)
                        {
                            return '1' + (item.userId * 2).ToString() + "as";
                        }
                    }
                }
            }
            return null;

        }

        //public static void AddTeacher(TeacherDTO teacher)
        //{
        //    DAL.UserDal.AddTeacher(Converters.TeacherConver.GetTeacher(teacher));
        //}

        public static List<UserDTO> GetUsers()
        {
            return Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers());
        }
        public static UserDTO UserByEmail(string email)
        {
           var q=  DAL.UserDal.GetUsers().Find(i => i.email == email);
            return Converters.UserConvert.GetUserDTO(q);
        }
        public static void ForgetPassword(string email)
        {
                UserDTO user = UserByEmail(email);
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
                    MailMessage mm = new MailMessage("miniclass909@gmail.com", email, "שיחזור סיסמא ", "");
                    mm.Body = "<h2>"+" הי " + user.firstName + ' ' + user.lastName + "</h2>"+"                                                             "
                   +"<h2>" +"     הסיסמא המשוחזרת:  " +user.password+"</h2>"+ "                                                      <a href='http://localhost:4200/login'>לדף הבית</a>";
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

        public static UserDTO GetUserById(int id)
        {
            foreach (var user in DAL.UserDal.GetUsers())
            {
                if (user.id == id)
                {
                    return Converters.UserConvert.GetUserDTO(user);
                }
            }
            return null;
        }

        public static void AddUser(UserDTO user)
        {
            DAL.UserDal.AddUser(Converters.UserConvert.GetUser(user));
        }

        // פונקציה השולחת מייל למשתמשים אשר מנהל הקבוצה אישר את השתתפותם
        public static void sendEmails(string firstName, string lastName, string email)
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
                    MailMessage mm = new MailMessage("miniclass909@gmail.com", email , "הרשמה התבצעה בהצלחה", "");
                    mm.Body = " הי " + firstName +' '+lastName+ "                                                                  "
                    + "<a href='http://localhost:4200/home'>לדף הבית</a>";
                    mm.BodyEncoding = UTF8Encoding.UTF8;
                    //  mm. = MailFormat.Html;
                    mm.IsBodyHtml = true;
                    mm.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;

                    client.Send(mm);
                }
                catch(Exception e)
                {

                }
            
        }
    }
}