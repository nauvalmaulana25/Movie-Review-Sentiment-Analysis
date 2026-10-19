import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'positive' | 'negative' | 'neutral' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'neutral',
      size = 'md',
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const baseStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'inherit',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      border: '3px solid #000',
      borderRadius: 0,
      whiteSpace: 'nowrap',
    };

    const variantStyles: Record<string, React.CSSProperties> = {
      positive: {
        backgroundColor: '#00cc66',
        color: '#000',
        borderColor: '#000',
      },
      negative: {
        backgroundColor: '#ff3333',
        color: '#fff',
        borderColor: '#000',
      },
      neutral: {
        backgroundColor: '#fff',
        color: '#000',
        borderColor: '#000',
      },
      info: {
        backgroundColor: '#ffcc00',
        color: '#000',
        borderColor: '#000',
      },
    };

    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        padding: '0.25rem 0.75rem',
        fontSize: '0.625rem',
      },
      md: {
        padding: '0.5rem 1rem',
        fontSize: '0.75rem',
      },
      lg: {
        padding: '0.75rem 1.5rem',
        fontSize: '0.875rem',
      },
    };

    const combinedStyles = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...style,
    };

    return (
      <span
        ref={ref}
        className={className}
        style={combinedStyles}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';