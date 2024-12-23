import { Button, Modal } from 'flowbite-react';
import { useContext, useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { UserContext } from '../../context/User.context';

export function CheckLogout() {
  const [openModal, setOpenModal] = useState(false);
  const { logOut } = useContext(UserContext);

  return (
    <>
      <Button
        className="group/parent  bg-transparent focus:ring-0  hover:!bg-red-600  !p-0 !m-0 !border-0 text-nowrap"
        onClick={() => setOpenModal(true)}
      >
        <i className="text-lg sm:text-xl fa-solid fa-right-from-bracket text-red-600 group-hover/parent:text-white  transition-colors duration-200 "></i>
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
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  setOpenModal(false);
                  logOut();
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
