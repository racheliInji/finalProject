using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class TeacherBL
    {
        public static void AddTeacher(TeacherDTO.UserAndTeacherDTO teacher)
        {
            UserDTO userDTO = new UserDTO()
            {
                //userId = teacher.userId,
                firstName = teacher.firstName,
                lastName = teacher.lastName,
                city = teacher.city,
                street = teacher.street,
                numhouse = teacher.numhouse,
                email = teacher.email,
                password = teacher.password,
                phone = teacher.password,
                tz = teacher.tz
            };
            TeacherDTO teacherDTO = new TeacherDTO()
            {
                TeacherId = teacher.userId,
                Qualifications = teacher.Qualifications

            };

            //TeacherDTO.UserAndTeacherDTO userAndTeacherDTO = new TeacherDTO.UserAndTeacherDTO();
            //userAndTeacherDTO.userDTO = user;
            //userAndTeacherDTO.teacherDTO = teacher;
            DAL.TeacherDAL.addTeacher(Converters.TeacherConver.GetTeacher(teacherDTO), Converters.UserConvert.GetUser(userDTO));
        }

        public static List<UserDTO> GetUsers()
        {
            return Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers());
        }
        public static List<TeacherDTO.UserAndTeacherDTO> GetTeacher()
        {
            var q = DAL.TeacherDAL.GetTeachers();
            var q2 = GetUsers();
            List<TeacherDTO.UserAndTeacherDTO> teacherAndUserList = new List<TeacherDTO.UserAndTeacherDTO>();
            foreach (var u in q2)
            {
                foreach (var t in q)
                {
                    if (u.userId == t.TeacherId)
                    {
                        teacherAndUserList.Add(new TeacherDTO.UserAndTeacherDTO()
                        {
                            //userId = u.userId,
                            firstName = u.firstName,
                            lastName = u.lastName,
                            city = u.lastName,
                            street = u.street,
                            numhouse = u.numhouse,
                            phone = u.phone,
                            password = u.password,
                            email = u.email,
                            tz = u.tz,
                            Qualifications = t.Qualifications
                        });

                    }
                 
                }
            }


            return teacherAndUserList;

            //return Converters.TeacherConver.DtoTeacherList(DAL.TeacherDAL.GetTeachers());
        }

    //public static List<TeacherDTO.UserAndTeacherDTO> GetTeachers()
    //{
    //    //return Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers()); 
    //    return Converters.TeacherConver.DtoTeacherList(DAL.TeacherDAL.GetTeachers());
    //}

    //public static TeacherDTO.UserAndTeacherDTO GetTeacher(int id)
    //{
    //    TeacherDTO.UserAndTeacherDTO userAndTeacherDTO = new TeacherDTO.UserAndTeacherDTO();
    //    //return Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers()); 
    //    return Converters.TeacherConver.GetTeacherDTO(DAL.TeacherDAL.GetTeacher(id));
    //}
}


}
