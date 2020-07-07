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
            using(RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                return db.Users.ToList();
            }
        }

        public static void AddUser(User user)
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                db.Users.Add(user);
                db.SaveChanges();
            }
        }

        public static void AddTeacher(Teacher teacher)
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                db.Teachers.Add(teacher);
                db.SaveChanges();
            }
        }
    }
}
