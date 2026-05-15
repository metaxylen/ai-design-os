export function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatPercent(value: number) {
  return `${value.toFixed(value % 1 === 0 ? 0 : 1)}%`;
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value);
}

export function formatTime(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));
}

export function humanizeStatus(value: string) {
  return value.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase());
}
