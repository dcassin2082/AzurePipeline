using System;
using System.Collections.Generic;
using System.Text;

namespace JungleApi.Services.Models
{
    public class OrderSummary
    {
        public int CustomerID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int OrderID { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public decimal OrderTotal { get; set; }
        public decimal Tax { get; set; }
        public decimal ShippingCharge { get; set; }
        public bool Shipped { get; set; }
        public DateTime ShipDate { get; set; }
        public int CreatedBy { get; set; }
        public string Carrier { get; set; }
        public int ItemCount { get; set; }
        public decimal OrderSubTotal { get; set; }
        public List<OrderDetail> OrderItems { get; set; }
    }
}
