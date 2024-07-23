import React from "react";
import styles from "./progressIndicator.module.css";

const ProgressIndicator: React.FC<{ progress: number; title: string }> = ({
  progress,
  title,
}) => {
  return (
    <div
      className={styles["progress-bar"]}
      style={{ "--progress": `${progress}` } as React.CSSProperties}
    >
      <progress id={title} max="100" value={progress}></progress>
    </div>
  );
};

export default ProgressIndicator;
