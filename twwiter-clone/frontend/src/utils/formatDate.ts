import formatDistance from 'date-fns/formatDistance';
import ruLang from 'date-fns/locale/ru';
export const formatDateFns = (data: Date): string => formatDistance(data, new Date(), {
  locale: ruLang
});