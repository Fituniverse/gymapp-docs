import React from 'react';

export default function NavPath({ items }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        background: 'var(--ifm-code-background)',
        padding: '0.4rem 0.8rem',
        borderRadius: '6px',
        fontSize: '0.9rem',
        margin: '0.5rem 0',
      }}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span style={{ color: 'var(--ifm-color-primary)', fontWeight: 500 }}>
            {item}
          </span>
          {index < items.length - 1 && (
            <span style={{ color: 'var(--ifm-font-color-secondary)' }}>›</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
