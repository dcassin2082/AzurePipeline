using System;
using System.Collections.Generic;
using System.Text;

namespace JungleApi.Services.Models
{
    public class SalesHistoryDto
    {
        public string Month { get; set; }
        public decimal? Amount { get; set; }
    }
}
