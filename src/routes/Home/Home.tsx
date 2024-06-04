// APIs
import { memo, useEffect } from "react";

// Components
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import UploadForm from "../../components/UploadForm/UploadForm";
import Ranking from "../../components/Ranking/Ranking";
import ImagePreview from "../../components/ImagePreview/ImagePreview";

// hooks
import useUserDetails from "../../hooks/useUserDetails";

// Style
import styles from "./Home.module.scss";
import notify from "../../APIs/notify";

function Home() {
  const { data, error } = useUserDetails();

  useEffect(() => {
    if (error?.message) {
      notify(error.message, "ERROR");
    }
  }, [error?.message]);

  return (
    <RouteWrapper>
      <section className={"section "}>
        <Ranking username={data?.name || ""} ranking={data?.rank || ""} />
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
