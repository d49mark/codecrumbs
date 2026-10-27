import React from 'react';

export interface FormFieldProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  required = false,
  className = '',
  children,
}) => {
  return (
    <div className={`space-y-1 text-xs ${className}`}>
      <label htmlFor={htmlFor} className="block font-mono text-slate-400">
        {label}
        {required && <span className="text-amber-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
};

