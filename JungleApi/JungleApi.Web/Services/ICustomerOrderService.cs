﻿using JungleApi.Web.Models;
using System.Collections.Generic;

namespace JungleApi.Web.Services
{
    public interface ICustomerOrderService
    {
        IEnumerable<OrderDetail> GetOrderDetails(int id);
        IEnumerable<OrderSummary> GetOrders(int id);
    }
}
