import { Stack, Button } from "react-bootstrap";
import "/src/style/SubscribedDesktop.css";
import { useNavigate } from "react-router-dom";

export default function SubscribedDesktop() {
  const navigate = useNavigate();

  const handleDismiss = () => {
    navigate("/");
  };
  return (
    <>
      <div id="main-div">
        <Stack>
          <div id="second-div">
            <img
              id="success-icon"
              src="src/assets/images/icon-success.svg"
              alt="icon denoting successful signup"
            />
            <h1>Thanks for subscribing</h1>
            <p>
              A confirmation email has been sent to (email). Please open it and
              click the button inside to confirm your subscription.
            </p>
            <Button size="lg" id="btn" onClick={handleDismiss}>
              Dismiss message
            </Button>
          </div>
        </Stack>
      </div>
    </>
  );
}
