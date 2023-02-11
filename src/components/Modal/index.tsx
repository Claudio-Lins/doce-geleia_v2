"use-clinet"
import { X } from 'phosphor-react'
import { ReactNode } from 'react'

interface ModalProps {
  isOpenModal?: boolean
  setStatusModal: (status: boolean) => void
  children: ReactNode
  id: string
  fullScreen?: boolean
  title?: string
}

export function Modal({
  isOpenModal,
  setStatusModal,
  children,
  title,
  id,
  fullScreen = false,
}: ModalProps) {
  function handleModalStatus(event: any ) {
    if (event.target.classList.contains('modalBg')) {
      setStatusModal(false)
    }
  }

  return (
    <>
      {isOpenModal ? (
        <div
          id={id}
          onClick={handleModalStatus}
          className={`fixed inset-0 z-50 flex cursor-pointer justify-center bg-black bg-opacity-50 ${
            fullScreen ? 'h-screen w-full bg-white bg-opacity-100' : ''
          }`}
        >
          <div className={`flex flex-col items-center justify-center p-6`}>
            <div className='flex w-full min-w-[600px] items-start justify-between rounded-t-lg border-b bg-white px-8 py-4'>
              <h3 className='font-Montserrat text-xl font-bold text-gray-900'>
                {title}
              </h3>
              <button
                type='button'
                onClick={() => setStatusModal(false)}
                className='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                <X size={24} weight='bold' />
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  )
}
