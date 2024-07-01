import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import CalenderIcon from '@/components/icons/CalenderIcon';
import EventsCalendar from '@/app/[lang]/(media)/events/components/EventsCalendarDialog/EventsCalendar';

export default function EventsCalendarDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'outline'}
          size={'icon'}
          className={'rounded-full text-sub_p'}
        >
          <CalenderIcon size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90%] sm:h-[90%] sm:rounded-2xl p-0 overflow-y-auto">
        <EventsCalendar />
      </DialogContent>
    </Dialog>
  );
}