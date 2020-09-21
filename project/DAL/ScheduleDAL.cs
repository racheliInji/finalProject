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

        public static Schedule deleteLesson(int scheduleId)
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                Schedule schedule = new Schedule();
                foreach (var item in db.Schedules)
                {
                    if (item.ScheduleId == scheduleId)
                    {

                         schedule = item;
                        db.Schedules.Remove(item);
                        if (schedule != null)
                            break;

                    }
                }
                try
                {
                    db.SaveChanges();
                    return schedule;
                }
                catch(Exception e)
                {
                    return null;
                }


            }
        }
    }
}