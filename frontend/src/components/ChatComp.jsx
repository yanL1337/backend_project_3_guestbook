import SingleChat from "./SingleChat";

const ChatComp = ({ data }) => {
  return (
    <section>
      {data.map((chat, index) => {
        return <SingleChat key={index} chat={chat} />;
      })}
    </section>
  );
};

export default ChatComp;
