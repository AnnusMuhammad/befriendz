import { useEffect, Component } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { setMessage, resetFormErrorsAction } from "redux/actions/commonActions";

const BaseLayout = ({ children, common, setMessage, resetErrors }) => {
  const location = useLocation();
  useEffect(()=>{
    if(common.message  !== null){
      toast[common.message.type](common.message.message);
      setMessage(null)
    }
  }, [common, setMessage])

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });

    if (location) resetErrors({});
  }, [location]);


  return (
    <>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
const mapStateToProps = (state) => ({
  common: state.common,
});
const mapDispatchToProps = (dispatch) => ({
  setMessage: (data) => dispatch(setMessage(data)),
  resetErrors: (data) => dispatch(resetFormErrorsAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);