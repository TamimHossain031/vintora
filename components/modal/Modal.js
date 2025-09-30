'use client'
import { useApp } from '../../hooks/useApp';
import{motion} from 'framer-motion'
import Search from '../common/Search';
export default function Modal() {

  const { modal, hideModal} = useApp();
  
  const manageModal = (modal) => {
    switch (modal) {
      case 'search':
        return <Search />
      default:
        return null
    }
  }
  return (
    modal ? (
      <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-[1000]" onClick={() => hideModal()}>       
       {
         manageModal(modal)
       }
       
      </motion.section>
    ) : null
  )
}
