export const getDisplayName = Component => Component.displayName || Component.name || 'Component';

export const formatBalance = (balance, currency = 'PKR') => (
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    minimumFractionDigits: 0,
    currency
  }).format(balance)
);