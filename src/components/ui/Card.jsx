import React from 'react';

/**
 * Card — reusable surface container.
 *
 * Props:
 *  - title     {string}  Optional card heading
 *  - children  {node}    Card body content
 *  - bgColor   {string}  CSS background color override
 *  - textColor {string}  CSS text color override
 *  - className {string}  Extra Tailwind / CSS class names
 *  - style     {object}  Inline style overrides (e.g. padding, border)
 */
function Card(props) {
  return (
    <div
      className={`card-base ${props.className || ''}`}
      style={{
        backgroundColor: props.bgColor || 'var(--color-bg-surface)',
        color: props.textColor || 'var(--color-text-primary)',
        borderRadius: '12px',
        border: '1px solid var(--color-border)',
        boxShadow: '0 4px 6px var(--color-shadow)',
        padding: '1.5rem',
        ...props.style,
      }}
    >
      {props.title && (
        <h3
          style={{
            marginBottom: '1rem',
            fontSize: '1.25rem',
            color: 'var(--color-text-primary)',
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: '0.5rem',
          }}
        >
          {props.title}
        </h3>
      )}
      <div style={{ color: props.textColor || 'var(--color-text-secondary)', lineHeight: '1.6' }}>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
