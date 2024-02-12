import { format, subDays } from 'date-fns';

export const getDate = (sub: number = 0) => {
  const datXDaysAgo = subDays(new Date(), sub);

  return format(datXDaysAgo, 'dd/MM/yyyy');
};
