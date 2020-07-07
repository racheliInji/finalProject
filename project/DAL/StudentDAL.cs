using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
            using(RacheliandDiniEntities1 db =new RacheliandDiniEntities1())
            {
                return db.Students.ToList();
            }
        }
    }
}
