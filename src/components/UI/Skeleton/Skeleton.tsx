import React from "react";
import styles from "./styles.module.sass";
import classNames from "classnames";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> { }

const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return <div className={classNames(styles.skeleton, className)} {...props} />;
};

export default Skeleton;
