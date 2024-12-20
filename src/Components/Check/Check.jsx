/* eslint-disable react/prop-types */
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function CheckClearAll({ ClearCart }) {
  const [openModal, setOpenModal] = useState(false);

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
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-600 dark:text-red-500" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to remove these products from your cart?
              This action cannot be undone.
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  ClearCart();
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
