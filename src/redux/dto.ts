export interface Dto {
  body: Body;
}

interface Body {
  events: Event[];
  timestamp: number;
}

interface Event {
  id: string;
  subcalendar_id: number;
  title: string;
  who: string;
  start_dt: string;
  end_dt: string;
}
