

const statusColors = {
  verified: 'bg-primary',
  cancel: 'bg-red-500',
  error: 'bg-red-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500'
};

const statusHex = {
  verified: 'var(--color-primary)',
  cancel: '#ef4444',
  error: '#ef4444',
  success: '#22c55e',
  warning: '#eab308'
};

export const getStatusColor = (color) => {
  return statusColors[color?.toLowerCase()] || 'bg-gray-500';
};

export const getStatusHex = (color) => {
  return statusHex[color?.toLowerCase()] || '#6b7280';
};