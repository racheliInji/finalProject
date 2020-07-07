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
                            city = u.lastName,
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
    }
}
