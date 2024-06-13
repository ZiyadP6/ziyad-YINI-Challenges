class SalesItem {
  constructor(branch, totalSales, date) {
    this.branch = branch;
    this.totalSales = totalSales;
    this.date = date;
  }
}

/// <summary>
/// It has been a busy year at mountain warehouse, having made lots of sales.
/// Management would like to know which branch made the most in revenue.
/// For this challenge you will be given an array of sales broken down by Branch and Date.
/// You will need to sum all branch across multiple days and identify which branch had the highest sales overall
/// Assume that there is only one branch with the highest total
/// We have provided some starting code but if you know of a better method then go ahead with that
/// </summary>
/// <param name="sales">The array of sales items (class SalesItem, see above declaration)</param>
/// <returns>The branch with the best performing sales</returns>
function CalculateBestBranch(sales) {
  const storeSales = {};
  let highestBranch = "";
  let highestSales = 0;

  sales.forEach((sale) => {
    if (storeSales[sale.branch]) {
      storeSales[sale.branch] += sale.totalSales;
    } else {
      storeSales[sale.branch] = sale.totalSales;
    }
  });

  for (const branch in storeSales) {
    if (storeSales[branch] > highestSales) {
      highestSales = storeSales[branch];
      highestBranch = branch;
    }
  }

  return highestBranch;
}

module.exports = { CalculateBestBranch, SalesItem };
