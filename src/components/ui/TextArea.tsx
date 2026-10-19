import { forwardRef, useState, useEffect } from 'react';
import type { TextareaHTMLAttributes } from 'react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  maxLength?: number;
  showCharCount?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      helperText,
      maxLength,
      showCharCount = true,
      className = '',
      style,
      id,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState<string>(String(props.value ?? props.defaultValue ?? ''));

    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;

    useEffect(() => {
      if (props.value !== undefined) {
        setValue(String(props.value));
      }
    }, [props.value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      if (maxLength && newValue.length > maxLength) {
        setValue(newValue.slice(0, maxLength));
      } else {
        setValue(newValue);
      }
      props.onChange?.(e);
    };

    const charCount = value.length;
    const isOverLimit = maxLength && charCount > maxLength;

    return (
      <div className={className} style={style}>
        {label && (
          <label
            htmlFor={textareaId}
            style={{
              display: 'block',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontSize: '0.875rem',
              marginBottom: '0.5rem',
              color: '#1a1a1a',
            }}
          >
            {label}
          </label>
        )}
        <div style={{ position: 'relative' }}>
          <textarea
            ref={ref}
            id={textareaId}
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={`${error ? errorId : ''} ${helperText ? helperId : ''}`.trim() || undefined}
            style={{
              width: '100%',
              minHeight: '140px',
              padding: '1rem',
              fontSize: '1rem',
              lineHeight: 1.6,
              fontFamily: 'inherit',
              border: '3px solid #000',
              borderRadius: 0,
              backgroundColor: '#fff',
              color: '#1a1a1a',
              resize: 'vertical',
              boxShadow: '4px 4px 0 #000',
              transition: 'box-shadow 150ms ease',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '2px 2px 0 #000';
              e.currentTarget.style.transform = 'translate(2px, 2px)';
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = '4px 4px 0 #000';
              e.currentTarget.style.transform = 'translate(0, 0)';
              props.onBlur?.(e);
            }}
            {...props}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            fontFamily: 'ui-monospace, Consolas, monospace',
          }}
        >
          {showCharCount && (
            <span
              style={{
                color: isOverLimit ? '#ff3333' : '#666',
                fontWeight: isOverLimit ? 700 : 400,
              }}
            >
              {charCount}{maxLength ? ` / ${maxLength}` : ''} characters
            </span>
          )}
          {helperText && !error && (
            <span id={helperId} style={{ color: '#666' }}>
              {helperText}
            </span>
          )}
        </div>
        {error && (
          <p
            id={errorId}
            role="alert"
            style={{
              marginTop: '0.5rem',
              color: '#ff3333',
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';