"use client";
import Image, { StaticImageData } from "next/image";

type QuestionWithImageProps = {
  image: StaticImageData;
  subquestions?: string[];
};
const QuestionWithImage: React.FC<QuestionWithImageProps> = ({
  image,
  subquestions,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-muted-foreground text-background rounded-lg shadow-md">
      <Image
        width={600}
        alt="Image for solution step"
        src={image}
        className="mx-auto"
        aria-label="Image for solution step"
      />
      {subquestions?.map((subquestion, index) => {
        return <p key={index}>{subquestion}</p>;
      })}
    </div>
  );
};

export default QuestionWithImage;
