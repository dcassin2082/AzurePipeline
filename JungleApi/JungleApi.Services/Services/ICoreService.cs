using JungleApi.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace JungleApi.Services.Services
{
    public interface ICoreService<T> where T : class
    {
        void InsertCollection(IList<T> list, string sql, string parmeterName, string typeName);
    }
}
