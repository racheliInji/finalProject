using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
   public    class TeacherConver
    {

        public static Teacher GetTeacher(DTO.TeacherDTO TeacherDTO)
        {
            Teacher Teacher = new Teacher();
            Teacher.Qualifications = TeacherDTO.Qualifications;
            Teacher.TeacherId = TeacherDTO.TeacherId;
  
            return Teacher;
        }
        public static TeacherDTO GetTeacherDTO(Teacher Teacher)
        {
            TeacherDTO TeacherDTO = new TeacherDTO();
            TeacherDTO.Qualifications = Teacher.Qualifications;
            TeacherDTO.TeacherId = Teacher.TeacherId;
            return TeacherDTO;
        }
        public static List<Teacher> TeachertList(List<DTO.TeacherDTO> list)
        {
            List<Teacher> teachers = new List<Teacher>();
            foreach (var item in list)
            {
                teachers.Add(GetTeacher(item));
            }
            return teachers;
        }
        public static List<TeacherDTO> DtoTeachertList(List<Teacher> list)
        {
            List<TeacherDTO> teachers = new List<TeacherDTO>();
            foreach (var item in list)
            {
                teachers.Add(GetTeacherDTO(item));
            }
            return teachers;
        }
    }
}

