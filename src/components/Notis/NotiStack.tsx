import { enqueueSnackbar } from "notistack";

export const DonwloadPDFNotification = () => {
    enqueueSnackbar("PDF Downloaded", {
        variant: "success",
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
        },
    });
};