using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL
{
    public class ScheduleDAL
    {
        public static void AddLesson(Schedule schedule)
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                db.Schedules.Add(schedule);
                db.SaveChanges();

            }
        }

        public static List<Schedule> GetLessons()
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                return db.Schedules.ToList();

            }
        }
    }
}