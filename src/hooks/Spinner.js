import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner() {
  const theme = useTheme();
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  return (
    <div className="sweet-loading">
      <ClipLoader
        size={150}
        color={theme.palette.type === "light" ? "#2196f3" : "#fff"}
        css={override}
      />
    </div>
  );
}
