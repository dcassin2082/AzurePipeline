using JungleApi.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace JungleApi.Services.Services
{
    public interface ICustomerOrderService
    {
        IEnumerable<OrderDetail> GetOrderDetails(int id);
        IEnumerable<OrderSummary> GetOrders(int id);
    }
}
