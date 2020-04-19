using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    public class GradeConvert
    {
        public static Grade GetGrade(DTO.GradeDTO GradeDTO)
        {
            Grade Grade = new Grade();
            Grade.IdGrade = GradeDTO.IdGrade;
            Grade.Level = GradeDTO.Level;

            return Grade;
        }
        public static GradeDTO GetGradeDTO(Grade Grade)
        {
            GradeDTO GradeDTO = new GradeDTO();
            GradeDTO.IdGrade = Grade.IdGrade;
            GradeDTO.Level = Grade.Level;
            return GradeDTO;
        }
    }
}
