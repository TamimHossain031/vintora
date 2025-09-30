import { useAppContext } from '../contexts/AppContext';

export const useApp = () => {
  const { state, actions } = useAppContext();
  
  return {
    // State
    loading: state.loading,
    notifications: state.notifications,
    modal: state.modal,
    
    // Actions
    setLoading: actions.setLoading,
    showNotification: actions.addNotification,
    hideNotification: actions.removeNotification,
    showModal: actions.setModal,
    hideModal: () => actions.setModal(null),
  };
};