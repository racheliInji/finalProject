using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace DAL
{
  public  class TeacherDAL
    {
        public static void addTeacher(Teacher teacher, User user)
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            { 
                db.Teachers.Add(teacher);
                db.Users.Add(user);
                try
                {
                    db.SaveChanges();
                    //_context.SaveChanges();
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
                            // raise a new exception nesting
                            // the current instance as InnerException
                            raise = new InvalidOperationException(message, raise);
                        }
                    }
                    throw raise;
                }
                db.SaveChanges();
            }
        }
        public static List<Teacher> GetTeachers()
        {

            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                return db.Teachers.ToList();
            }
        }

        public static void updateTeacher(TeacherDTO.UserAndTeacherDTO userAndTeacherDTO, int id)
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                foreach (var user in db.Users)
                {
                    if (user.id == id)
                    {
                        user.firstName = userAndTeacherDTO.firstName;
                        user.city = userAndTeacherDTO.city;
                        user.lastName = userAndTeacherDTO.lastName;
                        user.street = userAndTeacherDTO.street;
                        user.numhouse = userAndTeacherDTO.numhouse;
                        user.phone = userAndTeacherDTO.phone;
                        user.password = userAndTeacherDTO.password;
                        user.email = userAndTeacherDTO.email;
                        user.tz = userAndTeacherDTO.tz;

                    };
                }
                foreach (var teacher in db.Teachers)
                {
                    if (teacher.TeacherId == id)
                    {
                        teacher.Qualifications = userAndTeacherDTO.Qualifications;
     
                    }
                }

                db.SaveChanges();
            }
        }



        //public static UserAndTeacher GetTeacher(int id)
        //{
        //    using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
        //    {
        //        UserAndTeacher q = new UserAndTeacher();
        //        var teacher = from T in db.Teachers
        //                      join U in db.Users on T.TeacherId equals U.id
        //                      where T.TeacherId == id
        //                      select new { q = new UserAndTeacher(new User(U.id, U.tz, U.firstName, U.lastName, U.city, U.street, U.numhouse, U.email, U.password, U.phone), new Teacher(T.TeacherId, T.Qualifications)) };

        //        return teacher as UserAndTeacher;
        //    }
        //}
    }
}











    