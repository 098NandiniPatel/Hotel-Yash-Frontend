// import React, { useState } from 'react';
// import { DateRangePicker } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // Import the styles
// import 'react-date-range/dist/theme/default.css'; // Import the default theme

// const DateForm = () => {
//   const [selectedRange, setSelectedRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: null,
//       key: 'selection',
//     },
//   ]);

//   const handleRangeChange = (ranges) => {
//     setSelectedRange([ranges.selection]);
//   };

//   return (
//     <form>
//       <div>
//         <label htmlFor="dateRangePicker">Select a Date Range:</label>
//         <DateRangePicker
//           id="dateRangePicker"
//           ranges={selectedRange}
//           onChange={handleRangeChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default DateForm;

// import React from 'react'
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// const DateForm = () => {
//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DemoContainer components={['DateRangePicker']}>
//             <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
//           </DemoContainer>
//         </LocalizationProvider>
//       );
// }

// export default DateForm

import React, { useState } from 'react';
import { DatePicker, MobileDatePicker } from '@mui/lab';
import { TextField, Button } from '@mui/material';

const DateForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', startDate, endDate);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="startDatePicker">Start Date:</label>
        <DatePicker
          id="startDatePicker"
          value={startDate}
          onChange={handleStartDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div>
        <label htmlFor="endDatePicker">End Date:</label>
        <DatePicker
          id="endDatePicker"
          value={endDate}
          onChange={handleEndDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default DateForm;
