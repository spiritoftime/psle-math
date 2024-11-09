import GrowthTable from "./GrowthTable";
import IncomeGrowthTable from "./IncomeStatement";
import CashFlowGrowthTable from "./CashFlow";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

export default function FinancialMetrics() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        Microsoft Financial Metrics Growth Analysis
      </h1>

      <Tabs defaultValue="balance" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="balance">Balance Sheet</TabsTrigger>
          <TabsTrigger value="income">Income Statement</TabsTrigger>
          <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
        </TabsList>

        <TabsContent value="balance">
          <GrowthTable />
        </TabsContent>

        <TabsContent value="income">
          <IncomeGrowthTable />
        </TabsContent>

        <TabsContent value="cashflow">
          <CashFlowGrowthTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
