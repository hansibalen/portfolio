import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

// Section
export const Box = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => <motion.div className={className}>{children}</motion.div>;
