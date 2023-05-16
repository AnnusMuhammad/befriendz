import Modal from "views/components/shared/modal";

const LegalDetailModal = ({ open = {}, setOpen = () => {} }) => {
  const {
    isModalOpen = false,
    heading = "",
    subHeading = "",
    description = "",
  } = open;

  return (
    <Modal
      open={isModalOpen}
      setOpen={setOpen}
      title={heading}
      subTitle={subHeading}
    >
      <p className="font-openSans_regular text-[#515165] text-sm">
        {description}
      </p>
    </Modal>
  );
};
export default LegalDetailModal;
