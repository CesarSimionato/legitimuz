import { Avatar } from "./Avatar"

type ClientSelectorProps = {
  clients: string[]
  selectedClient: string
}

export const ClientSelector: React.FC<ClientSelectorProps> = ({ clients, selectedClient }) => {
  return (
    <div className="w-full fixed bottom-0 flex justify-between gap-4 p-4 b-t-2 border-solid border-t-2 border-black">
      {
        clients.map(client => (
          <div className="relative">
            <img className="w-20 h-20 rounded-full" src={`/avatar/${client}.png`} />

            <p className="text-sm">{client}</p>

            {
              selectedClient === client && <span className="top-0 left-14 absolute  w-5 h-5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            }
          </div>
        ))
      }
    </div>
  )
}