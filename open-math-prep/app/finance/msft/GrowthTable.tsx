export const growthData = [
    {
      metric: "Cash and cash equivalents",
      averageGrowth: 71
    },
    {
      metric: "Short-term investments",
      averageGrowth: -18
    },
    {
      metric: "Total cash, cash equivalents, and short-term investments",
      averageGrowth: -7
    },
    {
      metric: "Accounts receivable",
      averageGrowth: 45
    },
    {
      metric: "Inventories",
      averageGrowth: 4
    },
    {
      metric: "Other current assets",
      averageGrowth: 28
    },
    {
      metric: "Total current assets",
      averageGrowth: 0
    },
    {
      metric: "Property and equipment",
      averageGrowth: 27
    },
    {
      metric: "Operating lease right-of-use assets",
      averageGrowth: 23
    },
    {
      metric: "Equity and other investments",
      averageGrowth: 29
    },
    {
      metric: "Goodwill",
      averageGrowth: 18
    },
    {
      metric: "Intangible assets",
      averageGrowth: 14
    },
    {
      metric: "Other long-term assets",
      averageGrowth: 43
    },
    {
      metric: "Total assets",
      averageGrowth: 11
    },
    {
      metric: "Accounts payable",
      averageGrowth: 10
    },
    {
      metric: "Current portion of long-term debt",
      averageGrowth: 12
    },
    {
      metric: "Accrued compensation",
      averageGrowth: 4
    },
    {
      metric: "Short-term income taxes",
      averageGrowth: 45
    },
    {
      metric: "Short-term unearned revenue",
      averageGrowth: 11
    },
    {
      metric: "Other current liabilities",
      averageGrowth: 12
    },
    {
      metric: "Total current liabilities",
      averageGrowth: 8
    },
    {
      metric: "Long-term debt",
      averageGrowth: -8
    },
    {
      metric: "Long-term income taxes",
      averageGrowth: -8
    },
    {
      metric: "Long-term unearned revenue",
      averageGrowth: 52
    },
    {
      metric: "Deferred income taxes",
      averageGrowth: 52
    },
    {
      metric: "Operating lease liabilities",
      averageGrowth: 15
    },
    {
      metric: "Other long-term liabilities",
      averageGrowth: 16
    },
    {
      metric: "Total liabilities",
      averageGrowth: 4
    },
    {
      metric: "Net Working Capital",
      averageGrowth: -7
    },
    {
      metric: "Common stock and paid-in capital",
      averageGrowth: 6
    },
    {
      metric: "Retained earnings",
      averageGrowth: 44
    },
    {
      metric: "Accumulated other comprehensive loss",
      averageGrowth: -11
    },
    {
      metric: "Total stockholders' equity",
      averageGrowth: 21
    },
    {
      metric: "Total liabilities and stockholders' equity",
      averageGrowth: 11
    }
  ];
  
  // You can use this in your Next.js component like this:
  
  
  export default function GrowthTable() {
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
            {growthData.map((item, index) => (
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
