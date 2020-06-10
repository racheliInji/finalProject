using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
   public class VacationConvert
    {
        public static Vacation GetVacation(DTO.VacationDTO VacationDTO)
        {
            Vacation Vacation = new Vacation();
            Vacation.describe = VacationDTO.describe;
            Vacation.VacationId = VacationDTO.VacationId;
            Vacation.EndDate = VacationDTO.EndDate;
            Vacation.StudentId = VacationDTO.StudentId;
            Vacation.EndTime = VacationDTO.EndTime;
            Vacation.StartDate = VacationDTO.StartDate;
            Vacation.EndDate = VacationDTO.EndDate;
            Vacation.TeacherId = VacationDTO.TeacherId;

            return Vacation;
        }
        public static VacationDTO GetVacationDTO(Vacation Vacation)
        {
            VacationDTO VacationDTO = new VacationDTO();
            VacationDTO.describe = Vacation.describe;
            VacationDTO.VacationId = Vacation.VacationId;
            VacationDTO.EndDate = Vacation.EndDate;
            VacationDTO.StudentId = Vacation.StudentId;
            VacationDTO.EndTime = Vacation.EndTime;
            VacationDTO.StartDate = Vacation.StartDate;
            VacationDTO.EndDate = Vacation.EndDate;
            VacationDTO.TeacherId = Vacation.TeacherId;
            return VacationDTO;
        }
    }
}
