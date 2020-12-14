export const arrayFrom = (value) => (Array.isArray(value) ? value : (value ? [value] : []));
