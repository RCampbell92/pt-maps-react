import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function IndexRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = async () => {
      navigate("/home");
    };

    redirect();
  }, [navigate]);

  return <div>Welcome</div>;
}

export default IndexRedirect;
