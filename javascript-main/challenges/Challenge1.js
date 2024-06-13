
/// <summary>
/// Receives an amount and returns the total amount including tax.
/// </summary>
/// <param name="nonTaxAmount">The total cost of goods without tax.</param>
/// <param name="taxRate">The tax rate to be applied. 50% = 0.5</param>
/// <returns>Returns the price including tax.</returns>
function Add_Tax(nonTaxAmount, taxRate) {
  if (taxRate <= 1 && taxRate >= 0) {
    return nonTaxAmount * (1 + taxRate);
  }
  else {
    throw Error;
  }
}

/// <summary>
/// Takes in the current price and returns the price after discount has been deducted.
/// If the discount value is not valid then this method should return -1
/// </summary>
/// <param name="currentPrice">The current price of the product.</param>
/// <param name="discount">The percentage off of the rrp to be applied. E.g. 10% = 0.1</param>
/// <returns>Returns the price after discount.</returns>
function Discount(currentPrice, discount) {
  if (discount < 1 && discount > 0) {
    return currentPrice * (1 - discount);
  }
  
  return -1;
}

/// <summary>
/// Calculate the total price where two items are part of a "Buy One Get One Half Price" promotion.
/// </summary>
/// <param name="item1">The first item </param>
/// <param name="item2">The second item</param>
/// <returns>Returns total value of goods</returns>
function Buy_One_Get_One_Half_Price(item1, item2) {
  const smallerItem = Math.min(item1, item2);
  const total = item1 + item2 - smallerItem / 2;

  return total;
}

/// <summary>
/// Calculates the sum of items within an array.
/// </summary>
/// <param name="amounts">An array of numbers</param>
/// <returns>Returns total value of goods</returns>
function Calculate_Total_Cost(amounts) {
  let total = 0;
  amounts.forEach((number) => {
    total += number;
  });

  return total;
}

module.exports = { Add_Tax, Discount, Buy_One_Get_One_Half_Price, Calculate_Total_Cost };
