using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace DAL
{
    public class StudentDAL
    {
        public static void AddStudent(Student student, User user)
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                db.Users.Add(user);
                db.Students.Add(new Student() { IdGrade = student.IdGrade, Level = student.Level, StudentId = user.id });

                try
                {
                    db.SaveChanges();
                }
                catch (System.Data.Entity.Validation.DbEntityValidationException dbEx)
                {
                    Exception raise = dbEx;
                    foreach (var validationErrors in dbEx.EntityValidationErrors)
                    {
                        foreach (var validationError in validationErrors.ValidationErrors)
                        {
                            string message = string.Format("{0}:{1}",
                                validationErrors.Entry.Entity.ToString(),
                                validationError.ErrorMessage);
                            raise = new InvalidOperationException(message, raise);
                        }
                    }
                    throw raise;
                }
                db.SaveChanges();
            }
        }

        public static List<Student> GetStudents()
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                return db.Students.ToList();
            }
        }

        public static void updateStudent(StudentDTO.UserAndStudentDTO userAndStudentDTO, int id)
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                foreach (var user in db.Users)
                {
                    if (user.id == id)
                    {
                        user.firstName = userAndStudentDTO.firstName;
                        user.city = userAndStudentDTO.city;
                        user.lastName = userAndStudentDTO.lastName;
                        user.street = userAndStudentDTO.street;
                        user.numhouse = userAndStudentDTO.numhouse;
                        user.phone = userAndStudentDTO.phone;
                        user.password = userAndStudentDTO.password;
                        user.email = userAndStudentDTO.email;
                        user.tz = userAndStudentDTO.tz;

                    };
                }
                foreach (var student in db.Students)
                {
                    if (student.StudentId == id)
                    {
                        student.IdGrade = userAndStudentDTO.IdGrade;
                        student.Level = userAndStudentDTO.Level;
                    }
                }

                db.SaveChanges();
            }
            
        }

        public static void DeleteStudent(int id)
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                foreach (var item in db.Students)
                {
                    if (item.StudentId == id)
                    {
                        db.Students.Remove(item);
                    }
                }
                foreach (var item in db.Users)
                {
                    if (item.id == id)
                    {
                        db.Users.Remove(item);
                    }
                }
            }
        }
    }
}
