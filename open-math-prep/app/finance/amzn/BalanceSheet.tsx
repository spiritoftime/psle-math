export const balanceSheetData = [
    {
      metric: "Cash and cash equivalents",
      averageGrowth: 34
    },
    {
      metric: "Marketable securities",
      averageGrowth: -144
    },
    {
      metric: "Inventories",
      averageGrowth: 1
    },
    {
      metric: "Accounts receivable, net and other",
      averageGrowth: 23
    },
    {
      metric: "Total current assets",
      averageGrowth: 4
    },
    {
      metric: "Property and equipment, net",
      averageGrowth: 12
    },
    {
      metric: "Operating lease",
      averageGrowth: 12
    },
    {
      metric: "Goodwill",
      averageGrowth: 18
    },
    {
      metric: "Other assets",
      averageGrowth: 34
    },
    {
      metric: "Total assets",
      averageGrowth: 12
    },
    {
      metric: "Accounts payable",
      averageGrowth: 4
    },
    {
      metric: "Short-term loans and liabilities",
      averageGrowth: -6
    },
    {
      metric: "Accrued expenses and other",
      averageGrowth: 14
    },
    {
      metric: "Current Portion of LT Debt",
      averageGrowth: 7
    },
    {
      metric: "Other Current Liabilities",
      averageGrowth: 13
    },
    {
      metric: "Total current liabilities",
      averageGrowth: 7
    },
    {
      metric: "Long-term lease liabilities",
      averageGrowth: 7
    },
    {
      metric: "Long-term debt",
      averageGrowth: 7
    },
    {
      metric: "Other long-term liabilities",
      averageGrowth: 4
    },
    {
      metric: "Total Liabilities",
      averageGrowth: 7
    },
    {
      metric: "Net Working Capital",
      averageGrowth: 69
    },
    {
      metric: "Common stock",
      averageGrowth: 1
    },
    {
      metric: "Treasury stock, at cost",
      averageGrowth: 38
    },
    {
      metric: "Additional paid-in capital",
      averageGrowth: 29
    },
    {
      metric: "Accumulated other comprehensive income (loss)",
      averageGrowth: 19
    },
    {
      metric: "Retained earnings",
      averageGrowth: 17
    },
    {
      metric: "Total stockholder's equity",
      averageGrowth: 22
    },
    {
      metric: "Total liabilities and stockholders' equity",
      averageGrowth: 12
    }
  ];
  
  export default function BalanceSheetGrowthTable() {
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
            {balanceSheetData.map((item, index) => (
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