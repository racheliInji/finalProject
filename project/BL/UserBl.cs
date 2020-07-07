
using DTO;
using System;
using System.Collections.Generic;

namespace BL
{
    public class UserBl
    {
        public static bool Login(string username, string password)
        {
           var q= Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers());
            foreach (var item in q)
            {
                if (item.firstName == username )//&& item.password == password
                    return true;
            }
            return false;

        }

        //public static void AddTeacher(TeacherDTO teacher)
        //{
        //    DAL.UserDal.AddTeacher(Converters.TeacherConver.GetTeacher(teacher));
        //}

        public  static List<UserDTO> GetUsers()
        {
            return Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers());
        }

        public static void AddUser(UserDTO user)
        {
            DAL.UserDal.AddUser(Converters.UserConvert.GetUser(user));
        }
    }
}