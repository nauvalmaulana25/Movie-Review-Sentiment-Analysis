import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      padding = 'md',
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const baseStyles: React.CSSProperties = {
      border: '3px solid #000',
      borderRadius: 0,
      backgroundColor: '#fff',
      boxShadow: '4px 4px 0 #000',
    };

    const variantStyles: Record<string, React.CSSProperties> = {
      default: {},
      elevated: {
        boxShadow: '8px 8px 0 #000',
      },
      outlined: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    };

    const paddingStyles: Record<string, React.CSSProperties> = {
      none: { padding: 0 },
      sm: { padding: '1rem' },
      md: { padding: '1.5rem' },
      lg: { padding: '2rem' },
    };

    const combinedStyles = {
      ...baseStyles,
      ...variantStyles[variant],
      ...paddingStyles[padding],
      ...style,
    };

    return (
      <div
        ref={ref}
        className={className}
        style={combinedStyles}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';