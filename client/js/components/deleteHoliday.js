export const deleteHoliday = (holidayId) => {
    //axios the holiday id to delete it
    axios.delete(`/api/holidays/${holidayId}`).then(() => {
        location.href = "/";
    });
}