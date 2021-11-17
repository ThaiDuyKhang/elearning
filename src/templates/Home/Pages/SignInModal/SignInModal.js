import React, { Fragment } from "react";
import { Modal } from "antd";
import LazyLoad from "react-lazyload";
import "./../Style/StylePages.css";
import LogoModal from "../../../../components/Loading/LogoModal/LogoModal";
import SignIn from "../UserPages/SignIn";

export default function SignInModal({ showModal, setShowModal }) {
  return (
    <Fragment>
      <Modal
        width={1300}
        centered
        visible={showModal}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <div className="lg:grid grid-flow-row lg:grid-flow-col lg:grid-cols-12 lg:gap-x-8 justify-content-center lg:pt-5 lg:px-5 relative">
          <div className="welcome-modal hidden lg:inline-flex place-self-center col-span-5 pr-10">
            <LazyLoad>
              <LogoModal/>
              <img
                className="floating-two"
                src="/images/ImgModalLogin2.png"
                alt=""
                width="100%"
              />
            </LazyLoad>
          </div>
          <div className="line-modal col-span-1 w-fit hidden lg:inline-flex"></div>
          <div className="col-span-6">
           <SignIn setShowModal={setShowModal}/>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}
