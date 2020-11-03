using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
 public   class SubjectToTeacherConvert
    {

        public static SubjectToTeacher GetSubjectToTeacher(DTO.SubjectToTeacherDTO SubjectToTeacherDTO)
        {
            SubjectToTeacher SubjectToTeacher = new SubjectToTeacher();
            SubjectToTeacher.GradesRange = SubjectToTeacherDTO.GradesRange;
            //SubjectToTeacher.LessonLength = SubjectToTeacherDTO.LessonLength;
            SubjectToTeacher.PriceForLesson = SubjectToTeacherDTO.PriceForLesson;
            SubjectToTeacher.TeacherId = SubjectToTeacherDTO.TeacherId;
            SubjectToTeacher.Subject = SubjectToTeacherDTO.SubjectName;
            //foreach (var item in DAL.UserDal.GetUsers())
            //{
            //    if (SubjectToTeacherDTO.password == item.password && SubjectToTeacherDTO.teacherName == item.firstName)
            //    {
            //        SubjectToTeacher.TeacherId = item.id;
            //    }
            //}
            //foreach (var item in DAL.SubjectToTeacherDAL.GetSubjects())
            //{
            //    if (item.SubjectName == SubjectToTeacherDTO.SubjectName)
            //    {
            //        SubjectToTeacher.SubjectId = item.SubjectName;

            //    }
            //}

            return SubjectToTeacher;
        }
        //public static SubjectToTeacherDTO GetSubjectToTeacherDTO(SubjectToTeacher SubjectToTeacher)
        //{
        //    SubjectToTeacherDTO SubjectToTeacherDTO = new SubjectToTeacherDTO();
        //    SubjectToTeacherDTO.GradesRange = SubjectToTeacher.GradesRange;
        //    SubjectToTeacherDTO.LessonLength = SubjectToTeacher.LessonLength;
        //    SubjectToTeacherDTO.PriceForLesson = SubjectToTeacher.PriceForLesson;
        //    SubjectToTeacherDTO.SubjectId = SubjectToTeacher.SubjectId;
        //    SubjectToTeacherDTO.TeacherId = SubjectToTeacher.TeacherId;
        //    return SubjectToTeacherDTO;
        //}

    }
}
