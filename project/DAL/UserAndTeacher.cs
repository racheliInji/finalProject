using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public  class UserAndTeacher
    {
        public User user { get; set; }

        public Teacher teacher { get; set; }

        public UserAndTeacher(User user, Teacher teacher)
        {
            this.user = user;
            this.teacher = teacher;
        }

        public UserAndTeacher()
        {
            this.user = user;
            this.teacher = teacher;
        }

    }
}
