using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
  public  class StudentConvert
    {

        public static Student GetStudent(DTO.StudentDTO StudentDTO)
        {
            Student Student = new Student();
            Student.IdGrade = StudentDTO.IdGrade;
            Student.StudentId = StudentDTO.StudentId;
            Student.Level = StudentDTO.Level;

            return Student;
        }
        public static StudentDTO GetStudentDTO(Student Student)
        {
            StudentDTO StudentDTO = new StudentDTO();
            StudentDTO.IdGrade = Student.IdGrade;
            StudentDTO.StudentId = Student.StudentId;
            StudentDTO.Level = Student.Level;
            return StudentDTO;
        }
        public static List<Student> StudentList(List<DTO.StudentDTO> list)
        {
            List<Student> Students = new List<Student>();
            foreach (var item in list)
            {
                Students.Add(GetStudent(item));
            }
            return Students;
        }
        public static List<StudentDTO> DtoStudentList(List<Student> list)
        {
            List<StudentDTO> students = new List<StudentDTO>();
            foreach (var item in list)
            {
                students.Add(GetStudentDTO(item));
            }
            return students;
        }
    }
}
