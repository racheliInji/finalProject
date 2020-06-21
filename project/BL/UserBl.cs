
using DTO;
using System;
using System.Collections.Generic;

namespace BL
{
    public class UserBl
    {
        public static bool Login(string username, string password)
        {
            var q = Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers());
            foreach (var item in q)
            {
                if (item.firstName == username)//&& item.password == password
                    return true;
            }
            return false;

        }
        public static List<UserDTO> GetUsers()
        {
            return Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers());
        }

        public static string checkUser(string firstName, string password)
        {
            int id=-1;
            var q = Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers());
            foreach (var i in q)
            {
                if (i.password == password)
                {
                    id = i.userId;
                }
            }
            var q2 = Converters.StudentConvert.DtoStudentList(DAL.UserDal.getstudent());
            foreach (var i in q2)
            {
                if (i.StudentId == id)
                {
                    return "student";
                }
            }
            var q3 = Converters.TeacherConver.DtoTeachertList(DAL.UserDal.getTeacher());
            foreach (var i in q3)
            {
                if (i.TeacherId == id)
                {
                    return "student";
                }
            }
            return null;
            //return Converters.UserConvert.DtoUserList(DAL.UserDal.checkUser());
        }

        public static void AddUser(UserDTO user)
        {
            DAL.UserDal.AddUser(Converters.UserConvert.GetUser(user));
        }
    }
}