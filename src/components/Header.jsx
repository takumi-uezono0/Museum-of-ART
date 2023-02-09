import React, { useState } from "react";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const onClickButton = () => [setOpenMenu(!openMenu)];
  return (
    <header>
      {openMenu && (
        <>
          <a className="logo" href="/production">
            作品一覧へ
          </a>
          <a className="logo" href="/">
            MAPへ
          </a>
          <a className="logo" href="/cart">
            ShoppngCartへ
          </a>
          <a className="logo" href="/contact">
            お問い合わせへ
          </a>
        </>
      )}

      <button onClick={onClickButton}>Menu</button>
    </header>
  );
};
