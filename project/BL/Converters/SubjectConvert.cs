using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
 public   class SubjectConvert
    {
        public static Subject GetSubject(DTO.SubjectDTO SubjectDTO)
        {
            Subject Subject = new Subject();
            Subject.SubjectId = SubjectDTO.SubjectId;
            Subject.SubjectName = SubjectDTO.SubjectName;

            return Subject;
        }
        public static SubjectDTO GetSubjectDTO(Subject Subject)
        {
            SubjectDTO SubjectDTO = new SubjectDTO();
            SubjectDTO.SubjectId = Subject.SubjectId;
            SubjectDTO.SubjectName = Subject.SubjectName;
            return SubjectDTO;
        }

    }
}
