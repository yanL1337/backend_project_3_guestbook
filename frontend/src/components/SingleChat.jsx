const SingleChat = ({ chat }) => {
  return (
    <div>
      <p>{chat.firstName}</p>
      <p>{chat.lastName}</p>
      <p>{chat.email}</p>
      <p>{chat.message}</p>
    </div>
  );
};

export default SingleChat;
