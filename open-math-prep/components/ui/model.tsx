import { constantTotalQuestion1Data } from "../question/constantTotal/question";
import { moreThanLessThanQuestion1 } from "../question/moreThanLessThan/question";
import { SingaporeModel } from "../question/components/singaporeModel";

const MoneyRatioProblem: React.FC = () => {
  return (
    <div>
      <SingaporeModel
        title="Singapore Model Method: Money Ratio Problem (Constant Total Concept)"
        models={constantTotalQuestion1Data}
      />
      <div className="p-4 mt-4 bg-gray-100 rounded-md">
        <h3 className="mb-2 text-lg font-semibold">Solution:</h3>
        <p>1. Initial ratio: Ali : Billy = 5 : 4</p>
        <p>2. Scale up the ratio: 5 : 4 = 10 : 8 (Total 18 parts)</p>
        <p>3. After transfer: 9 : 9 (Total remains 18 parts)</p>
        <p>4. Difference in Ali's money: 10 - 9 = 1 part</p>
        <p>5. 1 part = $20</p>
        <p>6. Billy's final amount: 9 parts = 9 × $20 = $180</p>
        <p className="mt-2 font-bold">Therefore, Billy has $180 in the end.</p>
      </div>
    </div>
  );
};

// export default MoneyRatioProblem;

const MarblesProblem: React.FC = () => {
  return (
    <SingaporeModel
      title="Singapore Model Method: Marble Problem"
      models={moreThanLessThanQuestion1}
    />
  );
};
