export const getTimeRange = (
  startDate: string | undefined,
  endDate: string | undefined,
) => {
  if (startDate && endDate) {
    const startDt = new Date(startDate);
    const endDt = new Date(endDate);

    const fmt = new Intl.DateTimeFormat("en", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return `${fmt.format(startDt)} - ${fmt.format(endDt)}`;
  }
};
