import { useState } from 'react';
import './Avatar.css';

export function Avatar({
  src,
  alt = 'avatar',
  initials,
  size,
  className = '',
  ...props
}) {
  const [imageError, setImageError] = useState(false);

  const showImage = src && !imageError;

  const classes = [
    showImage ? 'avatar' : 'avatar-initials',
    size ? `avatar-${size}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (showImage) {
    return (
      <div className={classes} {...props}>
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  return (
    <div className={classes} {...props}>
      {initials}
    </div>
  );
}

Avatar.Group = function AvatarGroup({
  children,
  className = '',
  ...props
}) {
  return (
    <div
      className={`avatar-group ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};