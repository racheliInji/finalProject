using DTO;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
  public  class UserConvert
    {
        public static User GetUser(DTO.UserDTO UserDto)
        {
            User User = new User();
            User.city = UserDto.city;
            User.firstName = UserDto.firstName;
            User.lastName = UserDto.lastName;
            User.email = UserDto.email;
            User.tz = UserDto.tz;
            User.userId = UserDto.userId;
            User.password = UserDto.password;
            User.phone = UserDto.phone;
            User.street = UserDto.street;
            User.numhouse = UserDto.numhouse;
            return User;
    }
    public static UserDTO GetUserDTO(User User)
        {
            UserDTO UserDTO = new UserDTO();
            UserDTO.city = User.city;
            UserDTO.firstName = User.firstName;
            UserDTO.lastName = User.lastName;
            UserDTO.email = User.email;
            UserDTO.tz = User.tz;
            UserDTO.userId = User.userId;
            UserDTO.password = User.password;
            UserDTO.phone = User.phone;
            UserDTO.street = User.street;
            UserDTO.numhouse = User.numhouse;

            return UserDTO;
        }

    }
}
