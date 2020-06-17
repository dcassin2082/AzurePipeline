using JungleApi.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace JungleApi.Services.Services
{
    public interface IProductService
    {
        IEnumerable<ProductCategory> GetProductCategories();
        IEnumerable<ProductSubcategory> GetProductSubcategories(int id);
        IEnumerable<Product> GetProducts();
        IEnumerable<Product> GetProducts(int id, string sort);
    }
}
