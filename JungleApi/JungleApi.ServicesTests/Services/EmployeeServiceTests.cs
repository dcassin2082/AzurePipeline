using Microsoft.VisualStudio.TestTools.UnitTesting;
using JungleApi.Services.Services;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Configuration;
using JungleApi.Services.Models;

namespace JungleApi.Services.Services.Tests
{
    [TestClass()]
    public class EmployeeServiceTests
    {
        [TestMethod()]
        public void GetEmployeesTest()
        {
            IEmployeeService svc = new EmployeeService();
            Assert.IsTrue(svc.GetEmployees().Result.Count > 0);
        }
    }
}