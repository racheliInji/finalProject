using System;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BL
{
    public class HourBL
    {
        public static void AddLesson(HourDTO lesson)
        {
            DAL.HourDAL.AddLesson(Converters.HourConvert.GetHour(lesson));
        }
    }
}