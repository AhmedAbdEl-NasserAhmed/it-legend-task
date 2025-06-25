const AskQuestion = ({ closeModal }: { closeModal?: () => void }) => {
  return (
    <div>
      <button type="button" onClick={closeModal}>
        Close Modal{" "}
      </button>
    </div>
  );
};

export default AskQuestion;
