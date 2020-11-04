using System;
using System.Collections.Generic;
using System.Linq;
using DTO;

namespace DAL
{
    public class SubjectToTeacherDAL
    {
        public static List<Subject> GetSubjects()
        {

            using (RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                return db.Subjects.ToList();
            }
        }

        public static bool AddSubjectToTeacher(SubjectToTeacher subjectToTeacher)
        {
            using (RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                int index = db.SubjectToTeachers.ToList().FindIndex(item => item.TeacherId == subjectToTeacher.TeacherId &&
                item.Subject.Contains(subjectToTeacher.Subject)&& item.GradesRange.Contains(subjectToTeacher.GradesRange) );
                if (index >= 0)
                {
                    return true;
                }
                db.SubjectToTeachers.Add(subjectToTeacher);
                db.SaveChanges();
                return false;
            }
        }

        public static List<SubjectToTeacher> GetSubjectToTeachers()
        {
            using (RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                var q = db.SubjectToTeachers.ToList();
                return q;


            }
        }
        public static bool UpdateSubject(SubjectToTeacherDTO subject)
        {
            bool flag = false;

            using (RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                foreach (var i in db.SubjectToTeachers)
                {
                    if (i.TeacherId == subject.TeacherId && i.Subject.Contains(subject.SubjectName))
                    {
                        i.GradesRange = subject.GradesRange;
                        i.PriceForLesson = subject.PriceForLesson;
                        flag = true;
                        break;
                    }
                }
                db.SaveChanges();
                if (flag == true)
                    return true;


            }

            return false;
        }
    }
}