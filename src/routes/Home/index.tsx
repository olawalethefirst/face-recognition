import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import UploadForm from "../../components/UploadForm/UploadForm";
import Ranking from "../../components/Ranking/Ranking";
import ImagePreview from "../../components/ImagePreview/ImagePreview";

import styles from "./Home.module.scss"

function Home() {
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

export default Home;
