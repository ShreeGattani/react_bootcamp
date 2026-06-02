import './Button.css';

export const Button = ({
  children,
  variant = 'primary',
  isDisabled = false,
  isLoading = false,
  onClick,
}) => {
  const disabled = isDisabled || isLoading;

  const handleClick = (e) => {
    if (disabled) return;
    onClick?.(e);
  };

  const classes = [
    'btn',
    `btn-${variant}`,
    isDisabled && 'btn-disabled',
    isLoading && 'btn-loading',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={handleClick}
    >
      {isLoading && <span data-testid="spinner">⏳</span>}
      {children}
    </button>
  );
};