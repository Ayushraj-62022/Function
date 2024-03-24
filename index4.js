function calculateTax(income) {
    // Define tax brackets and their corresponding rates
    const taxBrackets = [
      { minIncome: 0, maxIncome: 50000, rate: 0.1 },   // 10% tax rate
      { minIncome: 50001, maxIncome: 100000, rate: 0.15 },  // 15% tax rate
      { minIncome: 100001, maxIncome: Infinity, rate: 0.2 }  // 20% tax rate
    ];
  
    // Find the applicable tax rate based on income
    const applicableBracket = taxBrackets.find(bracket => income >= bracket.minIncome && income <= bracket.maxIncome);
    if (!applicableBracket) {
      console.error("Invalid income or tax brackets not defined.");
      return null;
    }
  
    // Calculate tax amount
    const taxAmount = income * applicableBracket.rate;
  
    // Return the tax amount
    return taxAmount;
  }
  
  // Example usage:
  const income1 = 60000; // Test with various incomes
  const tax1 = calculateTax(income1);
  console.log(`For an income of $${income1}, the tax amount is $${tax1.toFixed(2)}.`);
  
  const income2 = 120000;
  const tax2 = calculateTax(income2);
  console.log(`For an income of $${income2}, the tax amount is $${tax2.toFixed(2)}.`);
  