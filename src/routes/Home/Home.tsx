// APIs
import { memo } from "react";

// Components
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import UploadForm from "../../components/UploadForm/UploadForm";
import Ranking from "../../components/Ranking/Ranking";
import ImagePreview from "../../components/ImagePreview/ImagePreview";

// Variables
import {
  clarifaiPAT,
  clarifaiAppID,
  clarifaiUserID,
  clarifaiFaceDetectionModelID,
} from "../../constants";

// Style
import styles from "./Home.module.scss";

function Home() {
  console.log(
    "environmental variables: ",
    clarifaiPAT,
    clarifaiAppID,
    clarifaiUserID,
    clarifaiFaceDetectionModelID
  );

  return (
    <RouteWrapper>
      <section className={"section "}>
        <Ranking />
      </section>

      <section className="section">
        <UploadForm />
      </section>

      <section className="section">
        <ImagePreview facesLocation={[]} />
      </section>
    </RouteWrapper>
  );
}

export default memo(Home);
