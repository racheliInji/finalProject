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
            using (RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                db.Hours.Add(hour);
                db.SaveChanges();

            }
        }

        public static List<Hour> getHours()
        {
            using (RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                return db.Hours.ToList();
            }
        }
    }
}