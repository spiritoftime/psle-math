export const cashFlowData = [
  { metric: "Net product sales", averageGrowth: 3 },
  { metric: "Net service sales", averageGrowth: 18 },
  { metric: "Total net sales", averageGrowth: 11 },
  { metric: "Cost of sales (COGS)", averageGrowth: 4 },
  { metric: "D&A", averageGrowth: 19 },
  { metric: "Gross Income", averageGrowth: 17 },
  { metric: "Fulfillment", averageGrowth: 10 },
  { metric: "Technology and infrastructure", averageGrowth: 24 },
  { metric: "Sales and marketing", averageGrowth: 17 },
  { metric: "General and administrative", averageGrowth: 19 },
  { metric: "Other operating expense (income), net", averageGrowth: 949 },
  { metric: "SG&A Expense", averageGrowth: 16 },
  { metric: "Total operating expenses", averageGrowth: 10 },
  { metric: "Operating income (EBIT)", averageGrowth: 75 },
  { metric: "Interest income", averageGrowth: 159 },
  { metric: "Interest expense", averageGrowth: 33 },
  { metric: "Other income (expense), net", averageGrowth: -160 },
  { metric: "Total non-operating income (expense)", averageGrowth: -170 },
  { metric: "Income (loss) before income taxes", averageGrowth: -424 },
  { metric: "Benefit (provision) for income taxes", averageGrowth: 555 },
  {
    metric: "Equity-method investment activity, net of tax",
    averageGrowth: 63,
  },
  { metric: "Net income (loss)", averageGrowth: 25 },
  { metric: "EBITDA", averageGrowth: 542 },
  { metric: "Basic earnings per share", averageGrowth: 533 },
  { metric: "Diluted earnings per share", averageGrowth: 533 },
  {
    metric: "Cash and cash equivalents, Beginning of Period",
    averageGrowth: 1,
  },
  { metric: "Cash and cash equivalents, End of Period", averageGrowth: 74 },
  { metric: "Free Cash Flow", averageGrowth: 4 },
];

export default function IncomeStatement() {
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
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-6 py-4">{item.metric}</td>
              <td className="px-6 py-4 text-right">
                {item.averageGrowth > 0 ? "+" : ""}
                {item.averageGrowth}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
