using System;
using DTO;

namespace BL
{
    public class SubjectToTeacherBL
    {
        public static bool AddSubjectToTeacher(SubjectToTeacherDTO subjectToTeacher)
        {
         return   DAL.SubjectToTeacherDAL.AddSubjectToTeacher(Converters.SubjectToTeacherConvert.GetSubjectToTeacher(subjectToTeacher));
        }
    }
}