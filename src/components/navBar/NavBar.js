import React from "react";
import styles from "./NavBar.module.scss";
export const NavBar = () => {
  return (
    <div>
      <h1> This is my Heading </h1>
      <ul className={styles.ul_style}>
        <li> Home </li>
        <li> About </li>
        <li> Contact </li>
        <li> Login </li>
      </ul>
      <h2 className={styles.heading_2}> My Paragraph</h2>
      <p className={styles.p_class}>
        Find the lowest price for Sms Marketing In Usa today! Now on sale at
        GigaPromo. GigaPromo is the website to compare Sms Marketing In Usa.
        Search and save now! The Best Price. Cheap Prices. Compare Simply.
        Always Sale. Compare Online. Full Offer. Find the lowest price for Sms
        Marketing In Usa today! Now on sale at GigaPromo. GigaPromo is the
        website to compare Sms Marketing In Usa. Search and save now! The Best
        Price. Cheap Prices. Compare Simply. Always Sale. Compare Online. Full
        Offer. Find the lowest price for Sms Marketing In Usa today! Now on sale
        at GigaPromo. GigaPromo is the website to compare Sms Marketing In Usa.
        Search and save now! The Best Price. Cheap Prices. Compare Simply.
        Always Sale. Compare Online. Full Offer.
      </p>

      <button className={styles.my_btn_1}> button 1 </button>
      <button className={styles.my_btn_2}> button 2 </button>
      <button className={styles.btn_3}> button 3 </button>
    </div>
  );
};
