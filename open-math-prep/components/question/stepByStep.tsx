"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

type Annotation = {
  prefixText?: string;
  mathEquation: string;
  suffixText?: string;
};

type StepByStepProps = {
  images: StaticImageData[];
  annotations: Annotation[];
};
const StepByStep: React.FC<StepByStepProps> = ({ images, annotations }) => {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-muted-foreground text-background rounded-lg shadow-md">
      <Image
        width={600}
        alt="Image for solution step"
        src={images[step]}
        className="mx-auto"
        aria-label="Image for solution step"
      />
      <div className="mt-4 p-4 bg-background text-muted-foreground rounded">
        <h3 className="font-bold mb-2">Step {step + 1}</h3>
        {annotations[step]?.prefixText}
        <InlineMath>{annotations[step].mathEquation}</InlineMath>
        {annotations[step]?.suffixText}

      </div>
      <div className="flex justify-between mt-4">
        <Button
          onClick={() => setStep((prev) => Math.max(0, prev - 1))}
          disabled={step === 0}
        >
          Previous
        </Button>
        <Button
          onClick={() =>
            setStep((prev) => Math.min(images.length - 1, prev + 1))
          }
          disabled={step === images.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepByStep;
