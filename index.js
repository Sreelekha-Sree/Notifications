import './index.css'
const Notifications = () => 
    (
    <div className="bg-container">
    <div className="main-container">
        <h1 className="head">Notifications</h1>
        <div className="primary">
          <img className="img" src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" id="img1" />
          <label for="img1" className="msg">Information Message</label>
        </div>
        <div className="success">
          <img className="img" src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" id="img2" />
          <label for="img2" className="msg">Success Message</label>
        </div>
        <div className="warning">
          <img className="img" src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" id="img3" />
          <label for="img3" className="msg">Warning Message</label>
        </div>
        <div className="error">
          <img className="img" src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" id="img4" />
          <label for="img4" className="msg">Error Message</label>
        </div>
      </div>
     </div>
    )
  export default  Notifications
  
