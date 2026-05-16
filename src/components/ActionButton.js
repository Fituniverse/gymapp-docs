import React from 'react';

const VARIANTS = {
  edit: { icon: 'boxicons:edit', color: '#5E9C57' },
  delete: { icon: 'line-md:trash', color: '#d9534f' },
  reconduct: { icon: 'pepicons-pop:arrow-spin', color: '#4972ca' },
  view: { icon: 'mdi:eye', color: '#5bc0de' },
  status: { icon: 'mdi:power', color: '#b593f8c5' },
  key: { icon: 'bitcoin-icons:key-filled', color: '#f0ad4e' },
};

export default function ActionButton({ type }) {
  const v = VARIANTS[type];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: v.color + '22',
        border: `1px solid ${v.color}`,
        verticalAlign: 'middle',
      }}
    >
      <iconify-icon icon={v.icon} width="16" style={{ color: v.color }} />
    </span>
  );
}
