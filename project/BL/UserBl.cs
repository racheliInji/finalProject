
using DTO;
using System;
using System.Collections.Generic;

namespace BL
{
    public class UserBl
    {
        public static string Login(string username, string password)
        {
           var q= Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers());
            foreach (var item in q)
            {
                if (item.firstName == username && item.password==password)//&& item.password == password
                {
                    var q2 = DAL.TeacherDAL.GetTeachers();
                    foreach(var t in q2)
                    {
                        if(item.userId== t.TeacherId)
                        {
                            return '0'+(item.userId*2).ToString()+"as";
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

        public  static List<UserDTO> GetUsers()
        {
            return Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers());
        }

        public static UserDTO GetUserById(int id)
        {
            foreach(var user in DAL.UserDal.GetUsers())
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
    }
}