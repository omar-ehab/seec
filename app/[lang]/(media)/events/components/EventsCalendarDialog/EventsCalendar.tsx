'use client';

import { Button } from '@/components/ui/button';
import { ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useMemo, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import EventCalenderType from '@/types/event-calender';
const events: EventCalenderType[] = []
export default function EventsCalendar() {
  const localizer = momentLocalizer(moment);
  const [date, setDate] = useState<Date>(new Date());
  const arrayOfYears = useMemo(() => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = 2020; i <= currentYear; i++) {
      years.push(i);
    }
    return years;
  }, []);

  const handleMonthChange = (value: string) => {
    const newDate = new Date(date);
    newDate.setMonth(parseInt(value));
    setDate(newDate);
  };

  const handleYearChange = (value: string) => {
    const newDate = new Date(date);
    newDate.setFullYear(parseInt(value));
    setDate(newDate);
  };
  const handleNextMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + 1);
    if (newDate.getFullYear() > new Date().getFullYear()) {
      return;
    }
    setDate(newDate);
  };
  const handlePreviousMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() - 1);
    if (newDate.getFullYear() < 2020) {
      return;
    }
    setDate(newDate);
  };
  return (
    <div className={'w-full h-full flex flex-col'}>
      <div className={'flex items-center justify-between py-6 px-8'}>
        <Button
          variant={'ghost'} size={'icon'} onClick={handlePreviousMonth}
          disabled={date.getFullYear() === 2020 && date.getMonth() === 0}
          aria-disabled={date.getFullYear() === 2020 && date.getMonth() === 0}
        >
          <ChevronRightIcon className={'size-5 text-sub_p focus:ring-primary'} />
        </Button>
        <div className={'flex-grow flex items-center gap-6 justify-center'}>
          <Select value={date.getMonth().toString()} onValueChange={handleMonthChange}>
            <SelectTrigger className="w-[100px] rtl:flex-row-reverse focus:ring-primary">
              <SelectValue placeholder="Select a month" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="0" className={'cursor-pointer rtl:flex-row-reverse'}>يناير</SelectItem>
                <SelectItem value="1" className={'cursor-pointer rtl:flex-row-reverse'}>فبراير</SelectItem>
                <SelectItem value="2" className={'cursor-pointer rtl:flex-row-reverse'}>مارس</SelectItem>
                <SelectItem value="3" className={'cursor-pointer rtl:flex-row-reverse'}>ابريل</SelectItem>
                <SelectItem value="4" className={'cursor-pointer rtl:flex-row-reverse'}>مايو</SelectItem>
                <SelectItem value="5" className={'cursor-pointer rtl:flex-row-reverse'}>يونيو</SelectItem>
                <SelectItem value="6" className={'cursor-pointer rtl:flex-row-reverse'}>يوليو</SelectItem>
                <SelectItem value="7" className={'cursor-pointer rtl:flex-row-reverse'}>اغسطس</SelectItem>
                <SelectItem value="8" className={'cursor-pointer rtl:flex-row-reverse'}>سبتمبر</SelectItem>
                <SelectItem value="9" className={'cursor-pointer rtl:flex-row-reverse'}>اكتوبر</SelectItem>
                <SelectItem value="10" className={'cursor-pointer rtl:flex-row-reverse'}>نوفمبر</SelectItem>
                <SelectItem value="11" className={'cursor-pointer rtl:flex-row-reverse'}>ديسمبر</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={date.getFullYear().toString()} onValueChange={handleYearChange}>
            <SelectTrigger className="w-[100px] rtl:flex-row-reverse focus:ring-primary">
              <SelectValue placeholder="Select a year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {arrayOfYears.map((year) => (
                  <SelectItem
                    key={`year_${year}`}
                    value={year.toString()}
                    className={'cursor-pointer rtl:flex-row-reverse'}>
                    {year}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button
          variant={'ghost'}
          size={'icon'}
          onClick={handleNextMonth}
          disabled={date.getFullYear() === new Date().getFullYear() && date.getMonth() === 11}
          aria-disabled={date.getFullYear() === new Date().getFullYear() && date.getMonth() === 11}
        >
          <ChevronLeftIcon className={'size-5 text-sub_p focus:ring-primary'} />
        </Button>
      </div>
      <div className={'flex-grow'}>
        <Calendar
          date={date}
          localizer={localizer}
          culture={'ar-AE'}
          rtl={true}
          views={['month']}
          defaultView={'month'}
          events={events}
          messages={{
            showMore: (count: number) => `+${count} إضافي`,
          }}
          onShowMore={(events, date) => {
            console.log(events, date);
          }}
          onSelectEvent={(event) => console.log(event)}
          eventPropGetter={(event) => {
            return {
              style: {
                backgroundColor: event.type === 'event' ? '#008E3D' : event.type === 'program' ? '#73AE28' : '#7E8989',
                borderRadius: '20px',
                textAlign: 'center',
                width: '85%',
                margin: '0 auto',
                fontSize: '12px',
                marginBottom: '2px',
              },
            };
          }}
        />
      </div>
      <div className={'p-6 flex items-center gap-16'}>
        <div className={'flex items-center gap-4'}>
          <span className={'size-6 rounded-lg bg-primary'}></span>
          <span className={'text-black text-sm'}>الفعاليات</span>
        </div>
        <div className={'flex items-center gap-4'}>
          <span className={'size-6 rounded-lg bg-[#73AE28]'}></span>
          <span className={'text-black text-sm'}>البرامج والمبادرات</span>
        </div>
        <div className={'flex items-center gap-4'}>
          <span className={'size-6 rounded-lg bg-sub_p'}></span>
          <span className={'text-black text-sm'}>الأجازات الرسمية</span>
        </div>
      </div>
    </div>
  );
}