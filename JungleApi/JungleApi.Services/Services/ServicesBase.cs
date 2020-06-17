using JungleApi.Data.DataAccess;
using JungleApi.Services.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using Microsoft.Data.SqlClient;

namespace JungleApi.Services.Services
{
    public abstract class ServicesBase : IDisposable, IServicesBase
    {
        protected JungleDbContext _dbContext;

        public ServicesBase()
        {

            _dbContext = new JungleDbContext();
        }

        public void Dispose()
        {
            _dbContext.Dispose();
        }
    }
}
