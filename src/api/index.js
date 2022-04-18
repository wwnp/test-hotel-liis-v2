export const getHotels = async (location, stringCurrDate, stringCheckOut) => {
  const res = await fetch(`https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${stringCurrDate}&checkOut=${stringCheckOut}&limit=5`);
  return await res.json();
};
