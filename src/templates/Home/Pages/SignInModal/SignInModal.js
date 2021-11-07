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
        <div className="grid grid-flow-col grid-cols-12 gap-x-8 justify-center  pt-5 px-5 relative">
          <div className="welcome-modal place-self-center col-span-5 pr-10">
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
          <div className="line-modal col-span-1 w-fit"></div>
          <div className="col-span-6">
           <SignIn setShowModal={setShowModal}/>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}
