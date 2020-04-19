using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
   public class LessonConvert
    {
        public static Lesson GetLesson(DTO.LessonDTO LessonDto)
        {
            Lesson Lesson = new Lesson();
            Lesson.LessonId = LessonDto.LessonId;
            Lesson.ScheduleId = LessonDto.ScheduleId;
            Lesson.Date = LessonDto.Date;
            Lesson.LessonDescribe = LessonDto.LessonDescribe;
            Lesson.H_W = LessonDto.H_W;
         
            return Lesson;
        

    }
    public static LessonDTO GetLessonDTO(Lesson Lesson)
        {
            LessonDTO LessonDTO = new LessonDTO();            
            LessonDTO.LessonId = Lesson.LessonId;
            LessonDTO.ScheduleId = Lesson.ScheduleId;
            LessonDTO.Date = Lesson.Date;
            LessonDTO.LessonDescribe = Lesson.LessonDescribe;
            LessonDTO.H_W = Lesson.H_W;

            return LessonDTO;
        }
    }
}
