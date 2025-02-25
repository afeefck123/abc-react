import React from "react";
import styles from "../styles/Plans.module.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6"; // WhatsApp button icon

const plans = [
  {
    name: "Premium",
    image: "/premium.jpg",
    price: "Base Price",
    whatsappLink: "https://wa.me/your-number",
  },
  {
    name: "Elite",
    image: "/elite.jpg",
    price: "Base Price",
    whatsappLink: "https://wa.me/your-number",
  },
  {
    name: "Advanced",
    image: "/advanced.jpg",
    price: "Base Price",
    whatsappLink: "https://wa.me/your-number",
  },
];

// const Plans = () => {
//   return (
//     <section className={styles.plansSection}>
//       <div className={styles.container}>
//         <h1 className={styles.title}>Our Packages</h1>
//         <p className={styles.subtitle}>
//           Transcend the Ordinary with Milan's Custom Packages - Tailored to Your Unique Needs:
//         </p>

//         <div className={styles.grid}>
//           {plans.map((plan, index) => (
//             <div key={index} className={styles.planWrapper}>
//               <div className={styles.planCard}>
//                 <img src={plan.image} alt={plan.name} className={styles.planImage} />
//                 <h2 className={styles.planName}>{plan.name}</h2>
//                 <p className={styles.planPrice}>{plan.price}</p>
//                 <a
//                   href={plan.whatsappLink}
//                   className={styles.whatsappButton}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   ask in whatsapp <FaArrowUpRightFromSquare className={styles.arrowIcon} />
//                 </a>
//               </div>
              
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

const Plans = () => {
  return (
    <section className={styles.plansSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Packages</h1>
        <p className={styles.subtitle}>
          Transcend the Ordinary with Milan's Custom Packages - Tailored to Your Unique Needs:
        </p>

        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            {plans.map((plan, index) => (
              <React.Fragment key={index}>
                <div className={styles.planCard}>
                  <img src={plan.image} alt={plan.name} className={styles.planImage} />
                  <h2 className={styles.planName}>{plan.name}</h2>
                  <p className={styles.planPrice}>{plan.price}</p>
                  <a
                    href={plan.whatsappLink}
                    className={styles.whatsappButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask in WhatsApp <FaArrowUpRightFromSquare className={styles.arrowIcon} />
                  </a>
                </div>

                {/* Add vertical line between grid items, but NOT after the last one */}
                {index < plans.length - 1 && <div className={styles.separator}></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Plans;
