using System;
using System.Collections.Generic;
using System.Text;

namespace JungleApi.Services.Models
{
    public class OrderDetail
    {
        public int CustomerID { get; set; }
        public int OrderID { get; set; }
        public int OrderItemID { get; set; }
        public string Description { get; set; }
        public string DetailedDescription { get; set; }
        public decimal LineTotal { get; set; }
        public int ProductID { get; set; }
        public string SKU { get; set; }
        public string LargePhotoFileName { get; set; }
        public string ThumbnailPhotoFileName { get; set; }
        public byte[] LargePhoto { get; set; }
        public byte[] ThumbnailPhoto { get; set; }
        public int ItemCount { get; set; }
        public decimal Price { get; set; }

    }
}
