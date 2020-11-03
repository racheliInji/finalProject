using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
   public class UserDal
    {
        public static List<User> GetUsers()
        {
            using(RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                return db.Users.ToList();
            }
        }

        public static void AddUser(User User)
        {
            using (RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                db.Users.Add(User);
                db.SaveChanges();
            }
        }

        public static void AddTeacher(Teacher teacher)
        {
            using (RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                db.Teachers.Add(teacher);
                db.SaveChanges();
            }
        }
    }
}
