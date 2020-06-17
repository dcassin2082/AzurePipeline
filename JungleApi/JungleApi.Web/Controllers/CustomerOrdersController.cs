using JungleApi.Web.Models;
using JungleApi.Web.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;

namespace JungleApi.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerOrdersController : ControllerBase
    {
        private ICustomerOrderService _customerOrderService;

        public CustomerOrdersController(ICustomerOrderService customerOrderService)
        {
            _customerOrderService = customerOrderService;
        }

        [HttpGet("details/{id}")]
        public IEnumerable<OrderDetail> GetOrderDetails([FromRoute] int id)
        {
            //List<OrderDetail> orderItems = new List<OrderDetail>();
            //using (SqlConnection cn = new SqlConnection(cs))
            //{
            //    cn.Open();
            //    string sql = "dbo.Get_order_items";
            //    using (SqlCommand cmd = new SqlCommand(sql, cn))
            //    {
            //        cmd.CommandType = System.Data.CommandType.StoredProcedure;
            //        cmd.Parameters.AddWithValue("@orderId", id);
            //        SqlDataAdapter da = new SqlDataAdapter(cmd);
            //        DataTable dt = new DataTable();
            //        da.Fill(dt);
            //        foreach (DataRow dr in dt.Rows)
            //        {
            //            OrderDetail item = new OrderDetail
            //            {
            //                CustomerID = Convert.ToInt32(GetFieldValue<int>(dr, "CustomerID")),
            //                OrderID = Convert.ToInt32(GetFieldValue<int>(dr, "OrderID")),
            //                OrderItemID = Convert.ToInt32(GetFieldValue<int>(dr, "OrderItemID")),
            //                Description = GetFieldValue<string>(dr, "Description").ToString(),
            //                Price = GetFieldValue<decimal>(dr, "Price"),
            //                LineTotal = Convert.ToDecimal(GetFieldValue<decimal>(dr, "LineTotal")),
            //                ProductID = Convert.ToInt32(GetFieldValue<int>(dr, "ProductID")),
            //                SKU = GetFieldValue<string>(dr, "SKU").ToString(),
            //                ItemCount = GetFieldValue<int>(dr, "ItemCount"),
            //                LargePhoto = GetFieldValue<byte[]>(dr, "LargePhoto"),
            //                ThumbnailPhoto = GetFieldValue<byte[]>(dr, "ThumbnailPhoto"),
            //                LargePhotoFileName = GetFieldValue<string>(dr, "LargePhotoFileName"),
            //                ThumbnailPhotoFileName = GetFieldValue<string>(dr, "ThumbnailPhotoFileName"),
            //            };
            //            orderItems.Add(item);
            //        }
            //    }
            //    return orderItems;
            //}
            return _customerOrderService.GetOrderDetails(id);
        }

        [HttpGet("summary/{id}")]
        public IEnumerable<OrderSummary> GetOrders([FromRoute] int id)
        {
            //List<OrderSummary> orders = new List<OrderSummary>();
            //using (SqlConnection cn = new SqlConnection(cs))
            //{
            //    cn.Open();
            //    string sql = "dbo.Get_customer_orders";
            //    using (SqlCommand cmd = new SqlCommand(sql, cn))
            //    {
            //        cmd.CommandType = System.Data.CommandType.StoredProcedure;
            //        cmd.Parameters.AddWithValue("@customerId", id);
            //        SqlDataAdapter da = new SqlDataAdapter(cmd);
            //        DataTable dt = new DataTable();
            //        da.Fill(dt);
            //        foreach (DataRow dr in dt.Rows)
            //        {
            //            OrderSummary item = new OrderSummary
            //            {
            //                CustomerID = Convert.ToInt32(GetFieldValue<int>(dr, "CustomerID")),
            //                OrderID = Convert.ToInt32(GetFieldValue<int>(dr, "OrderID")),
            //                OrderDate = Convert.ToDateTime(GetFieldValue<DateTime>(dr, "OrderDate")),
            //                CreatedDate = Convert.ToDateTime(GetFieldValue<DateTime>(dr, "CreatedDate")),
            //                OrderTotal = Convert.ToDecimal(GetFieldValue<decimal>(dr, "OrderTotal")),
            //                Tax = Convert.ToDecimal(GetFieldValue<decimal>(dr, "Tax")),
            //                ShippingCharge = Convert.ToDecimal(GetFieldValue<decimal>(dr, "ShippingCharge")),
            //                Shipped = Convert.ToBoolean(GetFieldValue<bool>(dr, "Shipped")),
            //                ShipDate = Convert.ToDateTime(GetFieldValue<DateTime>(dr, "ShipDate")),
            //                CreatedBy = Convert.ToInt32(GetFieldValue<int>(dr, "CreatedBy")),
            //                Carrier = GetFieldValue<string>(dr, "Carrier"),
            //                //ItemCount = Convert.ToInt32(GetFieldValue<int>(dr, "ItemCount")),
            //                FirstName = GetFieldValue<string>(dr, "FirstName"),
            //                LastName = GetFieldValue<string>(dr, "LastName"),
            //                OrderSubTotal = Convert.ToDecimal(GetFieldValue<decimal>(dr, "OrderSubTotal")),
            //            };
            //            orders.Add(item);
            //        }
            //    }
            //}
            //foreach (var order in orders)
            //{
            //    List<OrderDetail> orderItems = new List<OrderDetail>();
            //    using (SqlConnection cn = new SqlConnection(cs))
            //    {
            //        cn.Open();
            //        string sql = "dbo.Get_order_items";
            //        using (SqlCommand cmd = new SqlCommand(sql, cn))
            //        {
            //            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            //            cmd.Parameters.AddWithValue("@orderId", order.OrderID);
            //            SqlDataAdapter da = new SqlDataAdapter(cmd);
            //            DataTable dt = new DataTable();
            //            da.Fill(dt);
            //            foreach (DataRow dr in dt.Rows)
            //            {
            //                OrderDetail item = new OrderDetail
            //                {
            //                    CustomerID = Convert.ToInt32(GetFieldValue<int>(dr, "CustomerID")),
            //                    OrderID = Convert.ToInt32(GetFieldValue<int>(dr, "OrderID")),
            //                    OrderItemID = Convert.ToInt32(GetFieldValue<int>(dr, "OrderItemID")),
            //                    Description = GetFieldValue<string>(dr, "Description").ToString(),
            //                    LineTotal = Convert.ToDecimal(GetFieldValue<decimal>(dr, "LineTotal")),
            //                    ProductID = Convert.ToInt32(GetFieldValue<int>(dr, "ProductID")),
            //                    SKU = GetFieldValue<string>(dr, "SKU").ToString(),
            //                    ItemCount = GetFieldValue<int>(dr, "ItemCount"),
            //                    LargePhoto = GetFieldValue<byte[]>(dr, "LargePhoto"),
            //                    ThumbnailPhoto = GetFieldValue<byte[]>(dr, "ThumbnailPhoto"),
            //                    LargePhotoFileName = GetFieldValue<string>(dr, "LargePhotoFileName"),
            //                    ThumbnailPhotoFileName = GetFieldValue<string>(dr, "ThumbnailPhotoFileName"),
            //                    Price = GetFieldValue<decimal>(dr, "Price")
            //                };
            //                orderItems.Add(item);
            //                order.OrderItems = orderItems;
            //                order.ItemCount = orderItems.Count;
            //            }
            //        }
            //    }
            //}
            //return orders;
            return _customerOrderService.GetOrders(id);
        }

        public static T GetFieldValue<T>(DataRow dr, string fieldname)
        {
            if (dr[fieldname] == null || dr[fieldname] == DBNull.Value)
                return default;
            else
                return (T)Convert.ChangeType(dr[fieldname], typeof(T));
        }
    }
}