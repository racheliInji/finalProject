using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class RecommendationDTO
    {
        public int RecommendationId { get; set; }
        public int TeacherId { get; set; }
        public Nullable<int> SubjectId { get; set; }
        public string RecommendationContents { get; set; }
        public Nullable<int> Score { get; set; }

       
    }
}
