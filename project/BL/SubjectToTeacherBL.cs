using System;
using DTO;

namespace BL
{
    public class SubjectToTeacherBL
    {
        public static void AddSubjectToTeacher(SubjectToTeacherDTO subjectToTeacher)
        {
            DAL.SubjectToTeacherDAL.AddSubjectToTeacher(Converters.SubjectToTeacherConvert.GetSubjectToTeacher(subjectToTeacher));
        }
    }
}