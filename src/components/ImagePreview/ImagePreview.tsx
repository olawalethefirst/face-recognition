import styles from "./ImagePreview.module.scss"
import React from 'react'

export default function ImagePreview({ facesLocation }: { facesLocation:{top: string, bottom: string, left: string, right: string}[] } ) {
    console.log(facesLocation);

    return (
    <div className={styles["container"]}>
        <div className={styles["imageContainer"]}>
            <img alt="heads detected using AI" className={styles["image"]} src={"https://media-cdn.tripadvisor.com/media/photo-s/14/01/96/89/beautiful-people-at-nikki.jpg"}/>

            <div style={{position: "absolute", border: "1px solid blue", top: "5%", right:"90%", bottom: "90%", left: "5%" }}>

            </div>
        </div>

    </div>
  )
}
