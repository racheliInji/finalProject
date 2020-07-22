using System;
using System.Collections.Generic;
using System.Linq;
namespace DAL
{
    public class SubjectToTeacherDAL
    {
        public static List<Subject> GetSubjects()
        {

            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                return db.Subjects.ToList();
            }
        }

        public static void AddSubjectToTeacher(SubjectToTeacher subjectToTeacher)
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                db.SubjectToTeachers.Add(subjectToTeacher);
                db.SaveChanges();
            }
        }

        public static List<SubjectToTeacher> GetSubjectToTeachers()
        {
            using (RacheliandDiniEntities1 db = new RacheliandDiniEntities1())
            {
                return db.SubjectToTeachers.ToList();
                
            }
        }
    }
}