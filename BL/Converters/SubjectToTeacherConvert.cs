using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
 public   class SubjectToSubjectToTeacherConvert
    {

        public static SubjectToTeacher GetSubjectToTeacher(DTO.SubjectToTeacherDTO SubjectToTeacherDTO)
        {
            SubjectToTeacher SubjectToTeacher = new SubjectToTeacher();
            SubjectToTeacher.GradesRange = SubjectToTeacherDTO.GradesRange;
            SubjectToTeacher.LessonLength = SubjectToTeacherDTO.LessonLength;
            SubjectToTeacher.PriceForLesson = SubjectToTeacherDTO.PriceForLesson;
            SubjectToTeacher.SubjectId = SubjectToTeacherDTO.SubjectId;
            SubjectToTeacher.TeacherId = SubjectToTeacherDTO.TeacherId;

            return SubjectToTeacher;
        }
        public static SubjectToTeacherDTO GetSubjectToTeacherDTO(SubjectToTeacher SubjectToTeacher)
        {
            SubjectToTeacherDTO SubjectToTeacherDTO = new SubjectToTeacherDTO();
            SubjectToTeacherDTO.GradesRange = SubjectToTeacher.GradesRange;
            SubjectToTeacherDTO.LessonLength = SubjectToTeacher.LessonLength;
            SubjectToTeacherDTO.PriceForLesson = SubjectToTeacher.PriceForLesson;
            SubjectToTeacherDTO.SubjectId = SubjectToTeacher.SubjectId;
            SubjectToTeacherDTO.TeacherId = SubjectToTeacher.TeacherId;
            return SubjectToTeacherDTO;
        }

    }
}
