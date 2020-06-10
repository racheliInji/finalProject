using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
  public  class MessageConvert
    {

        public static Message GetMessage(DTO.MessageDTO MessageDTO)
        {
            Message Message = new Message();
            Message.IsOk = MessageDTO.IsOk;
            Message.MessageId = MessageDTO.MessageId;
            Message.VacationId = MessageDTO.VacationId;

            return Message;
        }
        public static MessageDTO GetMessageDTO(Message Message)
        {
            MessageDTO MessageDTO = new MessageDTO();
            MessageDTO.IsOk = Message.IsOk;
            MessageDTO.MessageId = Message.MessageId;
            MessageDTO.VacationId = Message.VacationId;
            return MessageDTO;
        }
    }
}
