import React, { useState } from "react";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const onClickButton = () => [setOpenMenu(!openMenu)];
  return (
    <header>
      <button onClick={onClickButton}>Menu</button>
      {openMenu && (
        <>
          <br />
          <a className="logo" href="/production">
            作品一覧へ
          </a>
          <br />
          <a className="logo" href="/">
            MAPへ
          </a>
          <br />
          <a className="logo" href="/cart">
            ShoppngCartへ
          </a>
          <br />
          <a className="logo" href="/contact">
            お問い合わせへ
          </a>
        </>
      )}
    </header>
  );
};
