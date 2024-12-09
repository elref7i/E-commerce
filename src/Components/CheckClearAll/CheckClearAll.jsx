import { Button, Modal } from 'flowbite-react';
import { useContext, useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { CartContext } from '../../context/Cart.context';

export default function CheckClearAll() {
  const [openModal, setOpenModal] = useState(false);
  const { clearAllCart } = useContext(CartContext);

  return (
    <>
      <Button
        className="bg-red-600  text-xl !font-bold block ml-auto hover:!bg-red-700 focus:ring-0  py-2"
        onClick={() => setOpenModal(true)}
      >
        Clear All
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this products?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  clearAllCart();
                  setOpenModal(false);
                }}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
