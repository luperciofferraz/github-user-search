import dayjs from 'dayjs';

export const dateConvert = (date: string) => {

    console.log(date);

    return dayjs(date).locale('pt-br').format('DD/MM/YYYY')
} 