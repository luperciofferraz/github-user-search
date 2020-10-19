import dayjs from 'dayjs';

export const dateConvert = (date: string) => {
    return dayjs(date).format('DD/MM/YYYY')
} 