using System;
using System.Collections.Generic;

namespace JungleApi.Services.Models
{
    public partial class ProductSubcategory
    {
        public int ProductSubcategoryId { get; set; }
        public string SubCategoryName { get; set; }
        public int ProductCategoryId { get; set; }
    }
}
