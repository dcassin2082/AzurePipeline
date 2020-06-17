using JungleApi.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace JungleApi.Services.Services
{
    public class ChartService : ServicesBase, IChartService
    {
        public IEnumerable<SalesData> GetColumnData()
        {
            IEnumerable<SalesData> data = _dbContext.SalesDatas;
            foreach (var d in data)
            {
                d.DateString = d.Day.Value.ToShortDateString();
            }
            return data.OrderBy(d => d.Day);
        }

        public IEnumerable<LineSery> GetLineSeries()
        {
            return _dbContext.LineSeries;
        }

        public IEnumerable<Trackball> GetTrackballData()
        {
            return _dbContext.Trackballs.OrderBy(x => x.X);
        }
    }
}
