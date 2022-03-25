import { Dialog, Combobox } from '@headlessui/react'
import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
const CommandPalette = ({ countries }) => {
  console.log(countries)
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Dialog open={isOpen} onClose={setIsOpen}
      className="fixed inset-0 overflow-y-auto p-4 pt-[25vh]"
    >
      <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
      <Combobox as="div" className="relative mx-auto max-w-xl rounded-md bg-white shadow-2xl">
        <div className="flex items-center">
          <Combobox.Input className="w-full bg-transparent text-sm overflow-hidden text-gray-800 placeholder-gray-400 h-12 p-3" placeholder="Search..." />
        </div>
        <Combobox.Options static className="py-4 text-sm max-h-96 overflow-y-auto">
          {countries.countries.map((item) => {
            return <div key={item.country}>
              <Combobox.Option className="px-4 py-2 focus:bg-orange-400">{item.country}</Combobox.Option>
            </div>;
          })}

        </Combobox.Options>
      </Combobox>

    </Dialog>
  )
}

export default CommandPalette