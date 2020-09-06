using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class HourDAL
    {
        public static void AddLesson(Hour hour )
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                db.Hours.Add(hour);
                db.SaveChanges();

            }
        }

        public static List<Hour> getHours()
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                return db.Hours.ToList();
            }
        }
    }
}