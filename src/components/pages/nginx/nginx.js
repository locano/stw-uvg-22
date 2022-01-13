import React from "react";
import "./nginx.css";
function Nginx() {
  return (
    <div className="body-nginx">
      <div className="title-nginx">
        <h1 className="nginx">Welcome to nginx!</h1>
        <img
          className="nginx-icon"
          height="72"
          src="https://img.icons8.com/color/452/nginx.png"
        />
      </div>
      <p className="nginx-description">
        If you see this page, the nginx web server is successfully installed and
        working. Further configuration is required.
      </p>

      <p className="nginx-description">
        For online documentation and support please refer to 
        <a href="http://nginx.org/" className="ref-link"> nginx.org</a>.<br />
        Commercial support is available at 
        <a href="http://nginx.com/" className="ref-link"> nginx.com</a>.
      </p>

      <p className="nginx-description">
        <em>Thank you for using nginx.</em>
      </p>
    </div>
  );
}

export default Nginx;
