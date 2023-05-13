import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import CopyToClipboard from "react-copy-to-clipboard";

const UserId = ({ classes, userId, shortId }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  return (
    <div>
      <button className={classes}>
        <span>{userId}</span>
      </button>
    </div>
  );
};

export default UserId;
