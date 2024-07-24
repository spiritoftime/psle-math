import React from "react";
import styles from "./progressIndicator.module.css";

const ProgressIndicator: React.FC<{ progress: number; title: string }> = ({
  progress,
  title,
}) => {
  
  return (
    <div
      style={{ "--progress": `${progress}` } as React.CSSProperties}
      className={styles["progress-container"]}
      >
      <div
        className={styles["progress-value"]}
      ></div>

      <div className={styles["progress-bar"]}>
        <progress id={title} max="100" value={progress}></progress>
      </div>
    </div>
  );
};

export default ProgressIndicator;
