using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace DAL
{
    public class HoursForTeacherDAL
    {
        public static void HoursForTeacherAdd(HoursForTeacher hoursForTeacher)
        {
            using (RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                db.HoursForTeachers.Add(hoursForTeacher);
                db.SaveChanges();
            }
        }

        public static List<HoursForTeacher> GetHoursForTeacher()
        {
            using(RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                return db.HoursForTeachers.ToList();
            }
            
        }

        public static void DeleteHoursAndDaysForTeacher(int id)
        {
           using(RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                foreach(var item in db.HoursForTeachers)
                {
                    if (item.HoursForTeacherId == id)
                    {
                        db.HoursForTeachers.Remove(item);
                        db.SaveChanges();
                    }
                }
            }
        }

        //public static List<HoursForTeacherDTO> GetHoursForTeacherById(int id)
        //{
        //    using (RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
        //    {
                
        //        return db.HoursForTeachers.ToList();
        //    }
        //}





        //public static void DeleteHoursAndDaysForTeacher(int id)
        //{
        //  using(RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
        //    {
        //        foreach(var item in GetHoursForTeacher())
        //        {
        //            if(item.)
        //        }
        //    }
        //}
    }
}
