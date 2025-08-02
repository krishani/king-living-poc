import { Snackbar, Alert } from '@mui/material';

export const ErrorPrompt = ({
    open,
    handleClose
}: {
    open: boolean;
    handleClose: Function;
}) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={() => { handleClose() }}>
            <Alert severity="error" onClose={() => { handleClose() }} variant="filled">
                Something went wrong. Please try again.
            </Alert>
        </Snackbar>
    )
}