export default function FormatDate(str) {
    var date = new Date(str);
    var current_date = new Date();

    var month = ['jan', "Feb", 'Mar', 'Apr', "May", "Jun", "Jul", "Aug", "Sep", 'Oct', "Nov", 'Dec']
    if (date.getDate() == current_date.getDate() && date.getMonth() == current_date.getMonth() && date.getFullYear() == current_date.getFullYear()) {
        return date.getHours() + ":" + date.getMinutes()
    } else {
        return date.getDate() + " " + month[date.getMonth() + 1]
    }
}