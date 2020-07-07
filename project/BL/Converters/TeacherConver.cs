using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
   public    class TeacherConver
    {

        public static Teacher GetTeacher(DTO.TeacherDTO TeacherDTO)
        {
            Teacher Teacher = new Teacher();
            Teacher.Qualifications = TeacherDTO.Qualifications;
            Teacher.TeacherId = TeacherDTO.TeacherId;

            return Teacher;
        }
        public static TeacherDTO GetTeacherDTO(Teacher Teacher)
        {
            TeacherDTO TeacherDTO = new TeacherDTO();
            TeacherDTO.Qualifications = Teacher.Qualifications;
            TeacherDTO.TeacherId = Teacher.TeacherId;
            return TeacherDTO;
        }
        public static List<Teacher> TeacherList(List<DTO.TeacherDTO> list)
        {
            List<Teacher> teachers = new List<Teacher>();
            foreach (var item in list)
            {
                teachers.Add(GetTeacher(item));
            }
            return teachers;
        }
        public static List<TeacherDTO> DtoTeacherList(List<Teacher> list)
        {
            List<TeacherDTO> teachers = new List<TeacherDTO>();
            foreach (var item in list)
            {
                teachers.Add(GetTeacherDTO(item));
            }
            return teachers;
        }

        //public static DAL.UserAndTeacher GetTeacher(TeacherDTO.UserAndTeacherDTO userAndTeacherDTO)
        //{
        //    Teacher Teacher = new Teacher();
        //    Teacher.Qualifications = userAndTeacherDTO.teacherDTO.Qualifications;
        //    Teacher.TeacherId = userAndTeacherDTO.teacherDTO.TeacherId;
        //    UserAndTeacher userAndTeacher = new UserAndTeacher() { user = UserConvert.GetUser(userAndTeacherDTO.userDTO), teacher = Teacher };

        //    return userAndTeacher;
        //}
        //public static TeacherDTO.UserAndTeacherDTO GetTeacherDTO(UserAndTeacher userAndTeacher)
        //{
        //    TeacherDTO teacherDTO = new TeacherDTO();
        //    teacherDTO.TeacherId = userAndTeacher.teacher.TeacherId;
        //    teacherDTO.Qualifications = userAndTeacher.teacher.Qualifications;

        //    TeacherDTO.UserAndTeacherDTO teacherAndUserDTO = new TeacherDTO.UserAndTeacherDTO();
        //    teacherAndUserDTO.userDTO = UserConvert.GetUserDTO(userAndTeacher.user);
        //    teacherAndUserDTO.teacherDTO = teacherDTO;
        //    return teacherAndUserDTO;
        //}

        //public static List<DAL.UserAndTeacher> teacherList(List<TeacherDTO.UserAndTeacherDTO> list)
        //{
        //    List<DAL.UserAndTeacher> usersAndTeachers = new List<DAL.UserAndTeacher>();
        //    foreach (var item in list)
        //    {
        //        usersAndTeachers.Add(GetTeacher(item));
        //    }
        //    return usersAndTeachers;
        //}
        //public static List<TeacherDTO.UserAndTeacherDTO> DtoTeacherList(List<DAL.UserAndTeacher> list)
        //{
        //    List<TeacherDTO.UserAndTeacherDTO> usersAndTeachersDTO = new List<TeacherDTO.UserAndTeacherDTO>();
        //    foreach (var item in list)
        //    {
        //        usersAndTeachersDTO.Add(GetTeacherDTO(item));
        //    }
        //    return usersAndTeachersDTO;
        //}


    }




}

