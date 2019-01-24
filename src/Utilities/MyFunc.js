export const NOT_LEAVE_BLANK = 'NOT_LEAVE_BLANK';
export const MUST_EMAIL = 'MUST_EMAIL';
export const MUST_NUMERIC = 'MUST_NUMERIC';

export const testMathAdd = (a, b) => {
  return a + b;
};

export const formatDate = (date) => {
  var monthNames = [
    "JAN", "FEB", "MAC",
    "APR", "MAY", "JUN", "JUL",
    "AUG", "SEP", "OCT",
    "NOV", "DEC"
  ];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  return day + ' ' + monthNames[monthIndex] + ' ' + year;
};

export const formatTime = (time) => {
  var times = time.split(":");
  var hour = times[0] > 12 ? ((times[0]-12) < 10 ? "0"+(times[0]-12) : (times[0]-12)) : times[0];
  var type = times[0] > 12 ? 'PM' : 'AM';
  return hour + ':' + times[1] + ' ' + type;
};

export const validation = (val, rules) => {
  switch (rules) {
    case NOT_LEAVE_BLANK: {
      if (val === '') {
        return false
      }
    };
    default: {
      return true;
    };
  }
};
