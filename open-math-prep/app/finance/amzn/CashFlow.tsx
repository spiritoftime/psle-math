import React from 'react';

export const cashFlowData = [
  { metric: "Net income", averageGrowth: 555 },
  { metric: "Depreciation, amortization, and other", averageGrowth: 19 },
  { metric: "Stock-based compensation expense", averageGrowth: 38 },
  { metric: "Non-operating expense (income), net", averageGrowth: -57 },
  { metric: "Deferred income taxes", averageGrowth: 578 },
  { metric: "Adjustments before change in NWC", averageGrowth: 61 },
  { metric: "Account Receivable, net and other", averageGrowth: -1 },
  { metric: "Inventories", averageGrowth: -42 },
  { metric: "Other Current Assets", averageGrowth: 27 },
  { metric: "Accounts Payable", averageGrowth: 51 },
  { metric: "Unearned Revenue", averageGrowth: 51 },
  { metric: "Accrued expenses and other", averageGrowth: -53 },
  { metric: "Change in NWC", averageGrowth: -28 },
  { metric: "Net Cash from Operations", averageGrowth: 41 },
  { metric: "Repayments of short-term debt, and other", averageGrowth: 208 },
  { metric: "Proceeds from short-term debt, and other", averageGrowth: 238 },
  { metric: "Repayments of long-term debt", averageGrowth: 86 },
  { metric: "Principal repayments of finance leases", averageGrowth: 8 },
  { metric: "Principal repayments of financing obligations", averageGrowth: 31 },
  { metric: "Net Cash used in Financing", averageGrowth: 159 },
  { metric: "Purchases of property and equipment", averageGrowth: 11 },
  { metric: "Proceeds from property and equipment sales", averageGrowth: 4 },
  { metric: "Acquisitions, net of cash acquired", averageGrowth: 174 },
  { metric: "Sales and maturities of marketable securities", averageGrowth: 18 },
  { metric: "Purchases of marketable securities", averageGrowth: -27 },
  { metric: "Net Cash used in Investing", averageGrowth: -1 },
  { metric: "Effect of foreign exchange rates", averageGrowth: 169 },
  { metric: "Net change in cash and cash equivalents", averageGrowth: -185 },
  { metric: "Cash and cash equivalent, Beginning of Period", averageGrowth: 17 },
  { metric: "Cash and cash equivalent, End of Period", averageGrowth: 42 },
  { metric: "Free Cash Flow", averageGrowth: 153 }
];

export default function CashFlowGrowthTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Metric</th>
            <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Average Growth (%)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {cashFlowData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 text-sm text-gray-900">{item.metric}</td>
              <td className="px-6 py-4 text-sm text-right text-gray-900">
                {item.averageGrowth > 0 ? '+' : ''}{item.averageGrowth}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}