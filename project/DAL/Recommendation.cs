//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Recommendation
    {
        public int RecommendationId { get; set; }
        public int TeacherId { get; set; }
        public Nullable<int> SubjectId { get; set; }
        public string RecommendationContents { get; set; }
        public Nullable<int> Score { get; set; }
    
        public virtual Subject Subject { get; set; }
        public virtual Teacher Teacher { get; set; }
    }
}