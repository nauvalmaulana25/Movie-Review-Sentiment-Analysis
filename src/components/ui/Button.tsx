import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
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
      gap: '0.5rem',
      fontFamily: 'inherit',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      border: '3px solid #000',
      borderRadius: 0,
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      transition: 'all 150ms ease',
      boxShadow: '4px 4px 0 #000',
      position: 'relative',
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled || loading ? 0.6 : 1,
    };

    const variantStyles: Record<string, React.CSSProperties> = {
      primary: {
        backgroundColor: '#000',
        color: '#fff',
      },
      secondary: {
        backgroundColor: '#fff',
        color: '#000',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '#000',
      },
    };

    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        padding: '0.5rem 1rem',
        fontSize: '0.75rem',
      },
      md: {
        padding: '0.75rem 1.5rem',
        fontSize: '0.875rem',
      },
      lg: {
        padding: '1rem 2rem',
        fontSize: '1rem',
      },
    };

    const combinedStyles = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...style,
    };

    const handleMouseDown = () => {
      if (!disabled && !loading) {
        combinedStyles.boxShadow = '2px 2px 0 #000';
        combinedStyles.transform = 'translate(2px, 2px)';
      }
    };

    const handleMouseUp = () => {
      if (!disabled && !loading) {
        combinedStyles.boxShadow = '4px 4px 0 #000';
        combinedStyles.transform = 'translate(0, 0)';
      }
    };

    const handleMouseLeave = () => {
      combinedStyles.boxShadow = '4px 4px 0 #000';
      combinedStyles.transform = 'translate(0, 0)';
    };

    return (
      <button
        ref={ref}
        className={className}
        style={combinedStyles}
        disabled={disabled || loading}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {loading && (
          <span
            style={{
              width: '1em',
              height: '1em',
              border: '2px solid currentColor',
              borderRightColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }}
            aria-hidden="true"
          />
        )}
        <span style={{ display: loading ? 'none' : 'inline' }}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';