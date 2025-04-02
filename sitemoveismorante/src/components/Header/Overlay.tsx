interface OverlayProps {
    isOpen: Boolean;
    onClose: (e: any) => void;
    children: React.ReactNode
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, onClose, children }) => {

    return (
        <div onClick={onClose} className={`${isOpen === true ?
            `fixed inset-0 flex justify-center pt-10 bg-gray-800 bg-opacity-95 z-10` :
            'hidden'} lg:hidden `} role='dialog'>
            {children}
        </div>
    )
}

export default Overlay;
