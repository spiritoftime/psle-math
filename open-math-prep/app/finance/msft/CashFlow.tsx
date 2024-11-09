export const cashFlowData = [
    {
      metric: "Net income",
      averageGrowth: 9
    },
    {
      metric: "Depreciation, amortization, and other",
      averageGrowth: 10
    },
    {
      metric: "Stock based compensation expense",
      averageGrowth: 26
    },
    {
      metric: "Net recognized losses (gains) on investments and derivatives",
      averageGrowth: -180
    },
    {
      metric: "Deferred income taxes",
      averageGrowth: 1864
    },
    {
      metric: "Account Receivable",
      averageGrowth: -20
    },
    {
      metric: "Inventories",
      averageGrowth: -79
    },
    {
      metric: "Other Current Assets",
      averageGrowth: 78
    },
    {
      metric: "Other long-term Assets",
      averageGrowth: -9
    },
    {
      metric: "Accounts Payable",
      averageGrowth: -34
    },
    {
      metric: "Unearned Revenue",
      averageGrowth: 8
    },
    {
      metric: "Income Taxes",
      averageGrowth: -14
    },
    {
      metric: "Other Current Liabilities",
      averageGrowth: -23
    },
    {
      metric: "Other long-term Liabilities",
      averageGrowth: -37
    },
    {
      metric: "Change in NWC",
      averageGrowth: -589
    },
    {
      metric: "Net Cash from Operations",
      averageGrowth: 7
    },
    {
      metric: "Repayments of debt",
      averageGrowth: 39
    },
    {
      metric: "Common stock issued",
      averageGrowth: 5
    },
    {
      metric: "Common stock repurchased",
      averageGrowth: -8
    },
    {
      metric: "Common stock cash dividends paid",
      averageGrowth: 8
    },
    {
      metric: "Other financing, net",
      averageGrowth: -98
    },
    {
      metric: "Net Cash used in Financing",
      averageGrowth: 0
    },
    {
      metric: "Additions to property and equipment",
      averageGrowth: 17
    },
    {
      metric: "Acquisition of companies and intangible assets",
      averageGrowth: 27
    },
    {
      metric: "Purchases of investments",
      averageGrowth: -8
    },
    {
      metric: "Maturities of investments",
      averageGrowth: 18
    },
    {
      metric: "Sales of investments",
      averageGrowth: 27
    },
    {
      metric: "Other investing, net",
      averageGrowth: 100
    },
    {
      metric: "Net Cash used in Investing",
      averageGrowth: -8
    },
    {
      metric: "Effect of foreign exchange rate on cash",
      averageGrowth: 213
    },
    {
      metric: "Net change in cash and cash equivalents",
      averageGrowth: 3867
    },
    {
      metric: "Cash and cash equivalents, Beginning of Period",
      averageGrowth: 1
    },
    {
      metric: "Cash and cash equivalents, End of Period",
      averageGrowth: 74
    },
    {
      metric: "Free Cash Flow",
      averageGrowth: 4
    }
  ];
  

  
  
  export default function CashFlowGrowthTable() {
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
            {cashFlowData.map((item, index) => (
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
  