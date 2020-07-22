using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class StudentBL
    {
        public static void AddStudent(DTO.StudentDTO.UserAndStudentDTO student)
        {
            UserDTO userDTO = new UserDTO()
            {
                //userId = student.userId,
                firstName = student.firstName,
                lastName = student.lastName,
                city = student.city,
                street = student.street,
                numhouse = student.numhouse,
                email = student.email,
                password = student.password,
                phone = student.password,
                tz = student.tz
            };
            StudentDTO StudentDTO = new StudentDTO()
            {
                //StudentId = student.StudentId,
                IdGrade = student.IdGrade,
                Level= student.Level

            };
            DAL.StudentDAL.AddStudent(Converters.StudentConvert.GetStudent(StudentDTO), Converters.UserConvert.GetUser(userDTO));
        }

        public static List<StudentDTO.UserAndStudentDTO> GetStudents()
        {
            var q = DAL.StudentDAL.GetStudents();
            var q2 = DAL.UserDal.GetUsers();
            List<StudentDTO.UserAndStudentDTO> UserAndStudentDTO = new List<StudentDTO.UserAndStudentDTO>();
            foreach (var u in q2)
            {
                foreach (var s in q)
                {
                    if (u.id == s.StudentId)
                    {
                        UserAndStudentDTO.Add(new StudentDTO.UserAndStudentDTO()
                        {
                            //userId = u.id,
                            firstName = u.firstName,
                            lastName = u.lastName,
                            city = u.city,
                            street = u.street,
                            numhouse = u.numhouse,
                            phone = u.phone,
                            password = u.password,
                            email = u.email,
                            tz = u.tz,
                            IdGrade= s.IdGrade,
                            Level=s.Level
                            
                        });

                    }

                }
            }
            return UserAndStudentDTO;
        }

        public static void updateStudent(StudentDTO.UserAndStudentDTO userAndStudentDTO)
        {
            foreach (var user in DAL.UserDal.GetUsers())
            {
                if(user.email==userAndStudentDTO.email && user.password == userAndStudentDTO.password)
                {
                    DAL.StudentDAL.updateStudent(userAndStudentDTO, user.id);
                }
            }
        }

        public static StudentDTO getStudentById(int id)
        {
            foreach(var student in DAL.StudentDAL.GetStudents())
            {
                if (student.StudentId == id)
                    return Converters.StudentConvert.GetStudentDTO(student);
            }
            return null;
        }
        public static object getIdStudent(UserDTO.userLogin baseUser)
        {
            foreach(var user in DAL.UserDal.GetUsers())
            {
                if (user.firstName == baseUser.firstName && user.password == baseUser.password)
                {
                    var s = getStudentById(user.id);
                    StudentDTO.UserAndStudentDTO userAndStudent = new StudentDTO.UserAndStudentDTO()
                    {
                        city = user.city,
                        firstName = user.firstName,
                        lastName = user.lastName,
                        street = user.street,
                        numhouse = user.numhouse,
                        phone = user.phone,
                        password = user.password,
                        email = user.email,
                        tz = user.tz,
                        IdGrade = s.IdGrade,
                        Level = s.Level

                    };
                    return userAndStudent;


                }
            }
            return null;
        }
    }
}
