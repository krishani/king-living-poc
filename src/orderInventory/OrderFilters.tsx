import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import type { Region } from '../types/orders';
import { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Button } from '@mui/material';
import { addDays, subMonths } from 'date-fns';

export const OrderFilters = ({
    filterByCountry,
    filterByDate
}: {
    filterByCountry: Function,
    filterByDate: Function
}) => {
    const minDate = subMonths(new Date(), 3);
    const maxDate = addDays(new Date(), 0);
    const [country, setCountry] = useState<Region | 'ALL'>('ALL');
    const [fromDate, setFromDate] = useState<Date | null>(minDate);
    const [toDate, setToDate] = useState<Date | null>(new Date());

    return (
        <Box
            mb={2}
        >
            <FormControl sx={{ m: 1, minWidth: 120 }} >
                <InputLabel id="demo-simple-select-label">Region</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="region"
                    onChange={(event) => {
                        const newCountry = event.target.value as Region | 'ALL';
                        setCountry(newCountry);
                        filterByCountry(newCountry);
                    }}
                >
                    <MenuItem value={'ALL'}>All Regions</MenuItem>
                    <MenuItem value={'US'}>United States</MenuItem>
                    <MenuItem value={'UK'}>England</MenuItem>
                    <MenuItem value={'APAC'}>Singapore</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <div
                    style={{
                        border: '1px solid #ccc',
                        padding: '16px',
                        borderRadius: '8px',
                        backgroundColor: '#f9f9f9'
                    }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <FormControl sx={{ m: 1, minWidth: 120 }} >
                            <DatePicker
                                label="Date from"
                                value={fromDate}
                                minDate={minDate}
                                maxDate={maxDate}
                                onChange={(newValue) => setFromDate(newValue)}
                                slotProps={{ textField: { size: 'small' } }}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} >

                            <DatePicker
                                label="Date to"
                                value={toDate}
                                minDate={minDate}
                                maxDate={maxDate}
                                onChange={(newValue) => setToDate(newValue)}
                                slotProps={{ textField: { size: 'small' } }}
                            />
                        </FormControl>
                        <FormControl> <Button variant="contained" sx={{ height: '40px' }} onClick={() => {
                            filterByDate(fromDate, toDate);
                        }}>
                            Apply
                        </Button>
                        </FormControl>

                    </LocalizationProvider>
                </div>
            </FormControl>
        </Box >
    );

}
