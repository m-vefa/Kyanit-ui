import React from 'react';

interface LabelProps {


  id?: string;
  appearance?: 'default' | 'information' | 'success' | 'warning' | 'danger';
  children?: React.ReactNode;
  labelFor: string;
  onClick?: () => void;
}

export const Label = ({
  id,
  appearance,
  labelFor,
  children,
  ...props
}: LabelProps) => {

  return (
    <label
      id={id}
      className={[appearance,""].join()}
      htmlFor={labelFor }
      {...props}
    >
      {children}
    </label>
  );
};
