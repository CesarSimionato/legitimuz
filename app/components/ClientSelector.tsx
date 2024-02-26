import { Avatar } from "./Avatar"

type ClientSelectorProps = {
  clients: string[]
  selectedClient: string
  handleSelectClient: (client: string) => void
}

export const ClientSelector: React.FC<ClientSelectorProps> = ({ clients, selectedClient, handleSelectClient }) => {
  return (
    <div className="w-full flex justify-center gap-10 p-4 border-solid border-t-2 border-black">
      {
        clients.map(client => (
          <div className="relative cursor-pointer" onClick={() => handleSelectClient(client)}>
            <img className="w-20 h-20 rounded-full" src={`/avatar/${client}.png`} />

            {
              selectedClient === client && <span className="top-0 left-14 absolute  w-5 h-5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            }
          </div>
        ))
      }
    </div>
  )
}