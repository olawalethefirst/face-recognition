// APIs
import { memo, useContext, useEffect } from "react";

// Components
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import UploadForm from "../../components/UploadForm/UploadForm";
import Ranking from "../../components/Ranking/Ranking";
import ImagePreview from "../../components/ImagePreview/ImagePreview";

// contexts
import { userContext } from "../../Providers/UserProvider";
import { faceDetectionContext } from "../../Providers/FaceDetectionProvider";
import useUserDetails from "../../hooks/useUserDetails";

function Home() {
  const { user } = useContext(userContext);
  const userQuery = useUserDetails();
  const { updateUser } = useContext(userContext);
  const { isDetectingFaces, imageURL, facesBoundary, detectFaces } =
    useContext(faceDetectionContext);

  const handleDetectFaces = async (imageURL: string) => {
    await detectFaces(imageURL);
    userQuery.refetch();
  };

  useEffect(() => {
    if (userQuery.data) {
      updateUser(userQuery.data);
    }
  }, [userQuery.data, updateUser]);

  return (
    <RouteWrapper>
      <section className={"section "}>
        <Ranking username={user?.name || ""} ranking={user?.rank || 0} />
      </section>

      <section className="section">
        <UploadForm detectFaces={handleDetectFaces} />
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
