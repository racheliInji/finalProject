using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
  public  class RecommendationConvert
    {
        public static Recommendation GetRecommendation(DTO.RecommendationDTO RecommendationDTO)
        {
            Recommendation Recommendation = new Recommendation();
            Recommendation.Score = RecommendationDTO.Score;
            Recommendation.RecommendationId = RecommendationDTO.RecommendationId;
            Recommendation.TeacherId = RecommendationDTO.TeacherId;
            Recommendation.SubjectId = RecommendationDTO.SubjectId;
            Recommendation.RecommendationContents = RecommendationDTO.RecommendationContents;
            return Recommendation;
        }
        public static RecommendationDTO GetRecommendationDTO(Recommendation Recommendation)
        {
            RecommendationDTO RecommendationDTO = new RecommendationDTO();
            RecommendationDTO.Score = Recommendation.Score;
            RecommendationDTO.RecommendationId = Recommendation.RecommendationId;
            RecommendationDTO.TeacherId = Recommendation.TeacherId;
            RecommendationDTO.RecommendationContents = Recommendation.RecommendationContents;
            RecommendationDTO.SubjectId = Recommendation.SubjectId;
            return RecommendationDTO;
        }
    }
}
