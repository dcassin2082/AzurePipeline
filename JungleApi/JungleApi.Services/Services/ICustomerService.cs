using JungleApi.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace JungleApi.Services.Services
{
    public interface ICustomerService
    {
        Task<List<Customer>> GetCustomers();
        Task<List<Customer>> GetCustomers(Expression<Func<Customer, bool>> predicate);
        Task<Customer> GetCustomer(int id);
        Task<Customer> GetCustomer(Expression<Func<Customer, bool>> predicate);
        Task<Customer> PostCustomer(Customer customer);
        Task<Customer> PutCustomer(Customer customer);
        Task<Customer> DeleteCustomer(Customer customer);
    }
}
