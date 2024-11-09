export const incomeStatementData = [
    {
      metric: "Product Revenue",
      averageGrowth: -4
    },
    {
      metric: "Service and other Revenue",
      averageGrowth: 23
    },
    {
      metric: "Total revenue",
      averageGrowth: 12
    },
    {
      metric: "Product Cost",
      averageGrowth: -1
    },
    {
      metric: "Service and other Cost",
      averageGrowth: 19
    },
    {
      metric: "Total cost of revenue",
      averageGrowth: 13
    },
    {
      metric: "Gross Income",
      averageGrowth: 12
    },
    {
      metric: "Research and development",
      averageGrowth: 15
    },
    {
      metric: "Sales and marketing",
      averageGrowth: 6
    },
    {
      metric: "General and administrative",
      averageGrowth: 22
    },
    {
      metric: "Operating income (EBIT)",
      averageGrowth: 13
    },
    {
      metric: "Net Interest income/expense",
      averageGrowth: 1548
    },
    {
      metric: "Interest Income",
      averageGrowth: 21
    },
    {
      metric: "Interest Expense",
      averageGrowth: -8
    },
    {
      metric: "Other Income (expense), net",
      averageGrowth: -129
    },
    {
      metric: "Income before income taxes",
      averageGrowth: 12
    },
    {
      metric: "Provision for income taxes",
      averageGrowth: 33
    },
    {
      metric: "Net income",
      averageGrowth: 9
    },
    {
      metric: "EBITDA",
      averageGrowth: 18
    },
    {
      metric: "Basic EPS",
      averageGrowth: 10
    },
    {
      metric: "Diluted EPS",
      averageGrowth: 10
    },
    {
      metric: "Basic Weighted average shares",
      averageGrowth: -1
    },
    {
      metric: "Diluted Weighted average shares",
      averageGrowth: -1
    }
  ];
  

  
  
  export default function IncomeGrowthTable() {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">Metric</th>
              <th className="px-6 py-3 text-right">Average Growth (%)</th>
            </tr>
          </thead>
          <tbody>
            {incomeStatementData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4">{item.metric}</td>
                <td className="px-6 py-4 text-right">
                  {item.averageGrowth > 0 ? '+' : ''}{item.averageGrowth}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  