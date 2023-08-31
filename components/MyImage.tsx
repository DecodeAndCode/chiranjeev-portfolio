import React from "react";
import mypic from "../public/image.jpg"

type Props = {};

export default function MyImage({}: Props) {
  return (
    <div>
      <Image>
        src={mypic}
      </Image>
    </div>
  );
}
