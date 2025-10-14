export const getHoursTime = (date: string | undefined) => {
  if (date) {
    const fmt = new Intl.DateTimeFormat("en", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return fmt.format(new Date(date));
  }
};
