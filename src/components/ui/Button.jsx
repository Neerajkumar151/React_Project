import React from 'react';

/**
 * Button — reusable UI button component.
 *
 * Props:
 *  - text        {string}   Label text (alternative to children)
 *  - children    {node}     JSX children (takes priority over text)
 *  - onClick     {function} Click handler
 *  - bgColor     {string}   CSS background color (var or hex)
 *  - textColor   {string}   CSS text color (var or hex)
 *  - className   {string}   Extra class names
 */
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.className || ''}
      style={{
        backgroundColor: props.bgColor || 'var(--color-primary)',
        color: props.textColor || 'var(--color-text-inverse)',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '0.875rem',
        transition: 'opacity 0.2s ease',
      }}
    >
      {props.children || props.text}
    </button>
  );
}

export default Button;