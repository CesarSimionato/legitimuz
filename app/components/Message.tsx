export type MessageProps = {
  message: string;
  messageOwner: string;
  isReceived: boolean;
};

export const Message: React.FC<MessageProps> = ({
  message,
  messageOwner,
  isReceived,
}) => {
  return (
    <div>
      {isReceived ? (
        <div className="rounded-lg bg-gray-100 p-4 text-sm max-w-[85%] self-start">
          {message}
        </div>
      ) : (
        <div className="flex-1">
          <div className="rounded-lg border p-4 text-sm">{message}</div>
        </div>
      )}
    </div>
  );
};
