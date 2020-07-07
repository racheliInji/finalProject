using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

                //var q = (from o in db.Users
                //         join od in db.Teachers on o.id equals od.TeacherId
                //         select new
                //         {
                //             o.id,
                //             o.firstName,
                //             o.lastName,
                //             o.email,
                //             o.numhouse,
                //             o.street,
                //             o.city,
                //             o.password,
                //             o.phone,
                //             o.tz,
                //             od.Qualifications,
                //         }).ToList();
                //foreach (object o in q)
                //{

                //  foreach(var x in)


                //}

                //var query = from user in db.Users
                //            join teacher in db.Teachers on user.id equals teacher.TeacherId 
                //            select new { user.id ,user.lastName,user.firstName,user.city,user.email,
                //            user.numhouse,user.password, user.phone, user.street,user.tz, teacher.Qualifications};
                //List<UserAndTeacher> UserAndTeacher = new List<UserAndTeacher>();
                //foreach (var v in query)
                //{
                //  UserAndTeacher userAndTeachers = new UserAndTeacher()
                //  {

                //  }
                //}
                return db.Teachers.ToList();
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











    