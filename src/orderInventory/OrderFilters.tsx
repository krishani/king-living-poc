import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import type { Region } from '../types/orders';
import { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Button, Paper } from '@mui/material';
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
        <Box sx={{
            width: '50%',
            '& .MuiInputLabel-root': {
                color: '#ffffff'
            },
            '& .MuiOutlinedInput-root': {
                color: '#ffffff'
            }
        }}>
            <Paper
                elevation={3}
                sx={{
                    padding: 3,
                    backgroundColor: '#ab7d7dff',
                    borderRadius: 2,
                }}
            >
                <Box
                    display="flex"
                    gap={2}
                    alignItems="center"
                    flexDirection="row"
                >
                    <FormControl>
                        <InputLabel id="region-select-label">Region</InputLabel>
                        <Select
                            labelId="region-select-label"
                            value={country}
                            label="Region"
                            size="small"
                            onChange={(event) => {
                                const newCountry = event.target.value as Region | 'ALL';
                                setCountry(newCountry);
                                filterByCountry(newCountry);
                            }}
                            sx={{
                                backgroundColor: '#815050ff',
                                color: '#ffffff',
                                '& .MuiSelect-icon': {
                                    color: '#ffffff'
                                }
                            }}
                        >
                            <MenuItem value={'ALL'}>All Regions</MenuItem>
                            <MenuItem value={'US'}>United States</MenuItem>
                            <MenuItem value={'UK'}>England</MenuItem>
                            <MenuItem value={'APAC'}>Singapore</MenuItem>
                        </Select>
                    </FormControl>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Box display="flex" gap={2}>
                            <DatePicker
                                label="Date from"
                                value={fromDate}
                                minDate={minDate}
                                maxDate={maxDate}
                                onChange={(newValue) => setFromDate(newValue)}
                                slotProps={{
                                    textField: {
                                        size: 'small',
                                        sx: {
                                            backgroundColor: '#815050ff',
                                            '& .MuiInputBase-input': {
                                                color: '#ffffff'
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#ffffff'
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#ffffff'
                                                }
                                            }
                                        }
                                    }
                                }}
                            />
                            <DatePicker
                                label="Date to"
                                value={toDate}
                                minDate={minDate}
                                maxDate={maxDate}
                                onChange={(newValue) => setToDate(newValue)}
                                slotProps={{
                                    textField: {
                                        size: 'small',
                                        sx: {
                                            backgroundColor: '#815050ff',
                                            '& .MuiInputBase-input': {
                                                color: '#ffffff'
                                            }
                                        }
                                    }
                                }}
                            />
                        </Box>
                    </LocalizationProvider>

                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            backgroundColor: '#815050ff',
                            height: '40px',
                            '&:hover': {
                                backgroundColor: '#ab7d7dff'
                            }
                        }
                        }
                        onClick={() => filterByDate(fromDate, toDate)}
                    >
                        Apply
                    </Button>
                </Box>
            </Paper>
        </Box>
    );

}
