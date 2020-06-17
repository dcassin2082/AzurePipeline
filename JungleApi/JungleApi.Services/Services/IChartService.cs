using JungleApi.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace JungleApi.Services.Services
{
    public interface IChartService : IDisposable
    {
        IEnumerable<LineSery> GetLineSeries();
        IEnumerable<SalesData> GetColumnData();
        IEnumerable<Trackball> GetTrackballData();

    }
}
