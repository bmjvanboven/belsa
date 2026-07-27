import { forwardRef } from "react";
import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  ReactNode,
} from "react";

const fieldBase =
  "w-full rounded-md border-[1.5px] px-3.5 py-2.5 text-base font-body text-fg-primary bg-white outline-none transition-colors duration-150 focus:border-primary";

function fieldBorder(error?: boolean) {
  return error ? "border-error" : "border-border-strong";
}

type FieldWrapperProps = {
  label?: string;
  error?: string;
  help?: string;
  required?: boolean;
  children: ReactNode;
};

function FieldWrapper({ label, error, help, required, children }: FieldWrapperProps) {
  return (
    <label className="flex flex-col gap-1.5 font-body">
      {label && (
        <span className="text-sm font-bold text-fg-primary">
          {label}
          {required && <span className="text-error"> *</span>}
        </span>
      )}
      {children}
      {error && <span className="text-[13px] text-error">{error}</span>}
      {!error && help && <span className="text-[13px] text-fg-muted">{help}</span>}
    </label>
  );
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  help?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, help, required, className, ...rest },
  ref
) {
  return (
    <FieldWrapper label={label} error={error} help={help} required={required}>
      <input
        ref={ref}
        required={required}
        className={[fieldBase, fieldBorder(!!error), className].filter(Boolean).join(" ")}
        {...rest}
      />
    </FieldWrapper>
  );
});

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  help?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, help, required, className, rows = 4, ...rest },
  ref
) {
  return (
    <FieldWrapper label={label} error={error} help={help} required={required}>
      <textarea
        ref={ref}
        required={required}
        rows={rows}
        className={[fieldBase, fieldBorder(!!error), className].filter(Boolean).join(" ")}
        {...rest}
      />
    </FieldWrapper>
  );
});

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  help?: string;
  options: { value: string; label: string }[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, help, required, options, className, ...rest },
  ref
) {
  return (
    <FieldWrapper label={label} error={error} help={help} required={required}>
      <select
        ref={ref}
        required={required}
        className={[fieldBase, fieldBorder(!!error), className].filter(Boolean).join(" ")}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
});

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, className, ...rest },
  ref
) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 font-body text-[15px]">
      <input
        ref={ref}
        type="checkbox"
        className={["h-5 w-5 accent-primary", className].filter(Boolean).join(" ")}
        {...rest}
      />
      {label}
    </label>
  );
});

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, className, ...rest },
  ref
) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 font-body text-[15px]">
      <input
        ref={ref}
        type="radio"
        className={["h-[18px] w-[18px] accent-primary", className].filter(Boolean).join(" ")}
        {...rest}
      />
      {label}
    </label>
  );
});
