
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
 // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({children, open, handleOpen, handleClose}) {
 // const [open, setOpen] = React.useState(false);
 // const handleOpen = () => setOpen(true);
 // const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal 
        className="w-full"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  className="w-full sm:w-2/3 md:w-1/2" sx={style}>
          {children}
          <div className="flex w-full justify-end items-center mt-4">
            <button
              onClick={handleClose}
              className="bg-red-400 w-12 h-12 hover:bg-red-600  text-white rounded-2xl text-xl "
            >
              X
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
