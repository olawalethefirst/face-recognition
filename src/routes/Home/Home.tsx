// APIs
import { memo, useContext } from "react";

// Components
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import UploadForm from "../../components/UploadForm/UploadForm";
import Ranking from "../../components/Ranking/Ranking";
import ImagePreview from "../../components/ImagePreview/ImagePreview";

// contexts
import { userContext } from "../../Providers/UserProvider";
import { faceDetectionContext } from "../../Providers/FaceDetectionProvider";

function Home() {
  const { user } = useContext(userContext);
  const { isDetectingFaces, imageURL, facesBoundary, detectFaces } =
    useContext(faceDetectionContext);

  return (
    <RouteWrapper>
      <section className={"section "}>
        <Ranking username={user?.name || ""} ranking={user?.rank || ""} />
      </section>

      <section className="section">
        <UploadForm detectFaces={detectFaces} />
      </section>

      <section className="section">
        <ImagePreview
          isDetectingFaces={isDetectingFaces}
          imageURL={imageURL}
          facesBoundary={facesBoundary}
        />
      </section>
    </RouteWrapper>
  );
}

export default memo(Home);
