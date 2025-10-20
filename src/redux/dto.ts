export interface Dto {
  body: Body;
}

interface Body {
  events: Event[];
  timestamp: number;
}

interface Event {
  id: string;
  series_id: string | null;
  remote_id: string | null;
  subcalendar_id: number;
  subcalendar_ids: number[];
  all_day: boolean;
  rrule: string;
  title: string;
  who: string;
  location: string;
  notes: string;
  version: string;
  readonly: boolean;
  tz: string;
  attachments: string[];
  start_dt: string;
  end_dt: string;
  ristart_dt: string | null;
  rsstart_dt: string | null;
  creation_dt: string;
  update_dt: string | null;
  delete_dt: string | null;
  signup_enabled: boolean;
  comments_enabled: boolean;
  comments_visibility: "all_users" | string;
  comments: string[];
}
