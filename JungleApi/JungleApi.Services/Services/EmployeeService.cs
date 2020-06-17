using JungleApi.Data.DataAccess;
using JungleApi.Data.Repository;
using JungleApi.Services.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using Microsoft.Data.SqlClient;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
using System.Linq;

namespace JungleApi.Services.Services
{
    public class EmployeeService : ServicesBase, IEmployeeService
    {
        private readonly IRepository<Employee> _employeeRepo;

        public EmployeeService()
        {
            _employeeRepo = _employeeRepo ?? (_employeeRepo = new Repository<Employee>(_dbContext));
        }

        public async Task<Employee> DeleteEmployee(Employee employee)
        {
            return await _employeeRepo.Delete(employee);
        }

        public async Task<Employee> GetEmployee(int id)
        {
            return await _employeeRepo.Get(id);
        }

        public async Task<Employee> GetEmployee(Expression<Func<Employee, bool>> predicate)
        {
            return await _employeeRepo.Get(predicate);
        }

        public async Task<List<Employee>> GetEmployees()
        {
            return await _employeeRepo.GetAll();
        }

        public async Task<List<Employee>> GetEmployees(Expression<Func<Employee, bool>> predicate)
        {
            return await _employeeRepo.GetAll(predicate);
        }

        public async Task<Employee> PostEmployee(Employee employee)
        {
            return await _employeeRepo.Post(employee);
        }

        public async Task<Employee> PutEmployee(Employee employee)
        {
            return await _employeeRepo.Put(employee);
        }

       
    }
}
