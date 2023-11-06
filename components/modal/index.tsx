import { ReactNode } from "react"

interface ModalProps {
    show: boolean
    children: ReactNode
}

export default function Modal({ show, children }: ModalProps) {
    return (
        <div className={`relative ${show ? 'z-10' : '-z-10'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className={`fixed inset-0 bg-black bg-opacity-75 transition-opacity ease-out duration-300 ${show ? 'opacity-100' : 'opacity-0'} `}></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className={`${show ? 'opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'} ease-out duration-300 relative transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}