using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class HourDTO
    {
        public int TeacherId { get; set; }
        public DateTime Date { get; set; }
        public string Starttime { get; set; }
       // public System.TimeSpan Endtime { get; set; }
    }
}
