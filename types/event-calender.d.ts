type EventCalenderType = {
  id: string | number;
  title: string;
  type: 'event' | 'program' | 'vacation';
  start: Date;
  end: Date;
};

export default EventCalenderType;