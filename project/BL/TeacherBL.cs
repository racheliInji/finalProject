using DTO;
using System;
using System.Collections.Generic;
using System.IO;
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

            DAL.TeacherDAL.addTeacher(Converters.TeacherConver.GetTeacher(teacherDTO), Converters.UserConvert.GetUser(userDTO));
        }




        public static TeacherDTO getTeacherById(int id)
        {
            foreach (var teacher in DAL.TeacherDAL.GetTeachers())
            {
                if (teacher.TeacherId == id)
                    return Converters.TeacherConver.GetTeacherDTO(teacher);
            }
            return null;
        }

        public static TeacherDTO.UserAndTeacherDTO getTeacherAndUserById(int id)
        {
            foreach (var teacher in DAL.TeacherDAL.GetTeachers())
            {
                if (teacher.TeacherId == id)
                {
                    var u = DAL.UserDal.GetUsers().Find(i => i.id == id);
                    TeacherDTO.UserAndTeacherDTO UserAndTeacherDTO = new TeacherDTO.UserAndTeacherDTO()
                    {
                        userId = u.id,
                        firstName = u.firstName,
                        lastName = u.lastName,
                        city = u.city,
                        street = u.street,
                        numhouse = u.numhouse,
                        phone = u.phone,
                        password = u.password,
                        email = u.email,
                        tz = u.tz,
                        Qualifications = teacher.Qualifications
                    };
                    return UserAndTeacherDTO;
                }
            }
            return null;
        }

        public static int getId(TeacherDTO.UserAndTeacherDTO teacher)
        {
            return DAL.UserDal.GetUsers().FirstOrDefault(i => i.password == teacher.password).id;
        }

        public static object getTeacher(UserDTO.userLogin baseUser)
        {
            foreach (var user in DAL.UserDal.GetUsers())
            {
                if (user.firstName == baseUser.firstName && user.password == baseUser.password)
                {
                    var s = getTeacherById(user.id);
                    TeacherDTO.UserAndTeacherDTO userAndTeacherDTO = new TeacherDTO.UserAndTeacherDTO()
                    {
                        Qualifications = s.Qualifications,
                        city = user.city,
                        firstName = user.firstName,
                        lastName = user.lastName,
                        street = user.street,
                        numhouse = user.numhouse,
                        phone = user.phone,
                        password = user.password,
                        email = user.email,
                        tz = user.tz

                    };
                    return userAndTeacherDTO;


                }
            }
            return null;
        }

        public static void updateTeacher(TeacherDTO.UserAndTeacherDTO userAndTeacherDTO)
        {
            foreach (var user in DAL.UserDal.GetUsers())
            {
                if (user.email == userAndTeacherDTO.email && user.password == userAndTeacherDTO.password)
                {
                    DAL.TeacherDAL.updateTeacher(userAndTeacherDTO, user.id);
                }
            }
        }

        public static List<UserDTO> GetUsers()
        {
            return Converters.UserConvert.DtoUserList(DAL.UserDal.GetUsers());
        }
        public static List<TeacherDTO.UserAndTeacherDTO> GetTeachers()
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
                            userId = u.userId,
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

        public static string GetTeacherById(int id)
        {

           var file= DAL.TeacherDAL.GetTeachers().FirstOrDefault(i => i.TeacherId == id).Qualifications;
            return file;
        }

        public static int GetTeacherId(HoursForTeacherDTO item)
        {
            foreach (var i in GetTeachers())
            {
                if (i.userId == item.TeacherId)
                {
                    return i.userId;
                }
            }
            return 0;
        }
        public static List<TeacherDTO.TeacherAndSubjectDTO> GetTeacherAndSubject()
        {
            var q = DAL.TeacherDAL.GetTeachers();
            var q2 = GetUsers();
            var q3 = DAL.SubjectToTeacherDAL.GetSubjectToTeachers();
            List<TeacherDTO.TeacherAndSubjectDTO> teacherAndSubjecList = new List<TeacherDTO.TeacherAndSubjectDTO>() { };
            foreach (var u in q2)
            {
                foreach (var t in q)
                {
                    if (u.userId == t.TeacherId)
                    {
                        foreach (var s in q3)
                        {
                            if (s.TeacherId == u.userId)
                            {

                                TeacherDTO.TeacherAndSubjectDTO teacherAndSubjectDTO = new TeacherDTO.TeacherAndSubjectDTO()
                                {
                                    userId = u.userId,
                                    firstName = u.firstName,
                                    lastName = u.lastName,
                                    city = u.lastName,
                                    street = u.street,
                                    numhouse = u.numhouse,
                                    phone = u.phone,
                                    password = u.password,
                                    email = u.email,
                                    GradesRange = s.GradesRange,
                                    PriceForLesson = (int)s.PriceForLesson,


                                    //DAL.SubjectToTeacherDAL.GetSubjects().Find(i => i.SubjectId == s.SubjectId).SubjectName,
                                    Qualifications = t.Qualifications
                                };
                                foreach (var i in DAL.SubjectToTeacherDAL.GetSubjects())
                                {
                                    if (i.SubjectId == s.SubjectId)
                                    {
                                        teacherAndSubjectDTO.SubjectName = i.SubjectName;
                                    }
                                };
                                teacherAndSubjecList.Add(teacherAndSubjectDTO);



                            }
                        }
                    }

                }
            }
            return teacherAndSubjecList;
        }


    }


}
