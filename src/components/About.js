import React, { useState,useEffect } from "react";
import styles from "../styles/About.module.css";
import Navbar from "./Navbar";

const teamMembers = [
    {
        id: "ali-hosseini",
        name: "Ali Hosseini",
        title: "CEO and Founder",
        image: "/images/team1.jpg",
        linkedin: "https://www.linkedin.com/in/ali-hosseini",
        description: `Ali Hosseini is the CEO and head of design at Milan Webionics Inc., 
        with over ten years of experience in the creative field. He has worked with clients like Dior, Mercedes-Benz, 
        and Cartier, refining his skills in visual direction and aesthetics. He believes in strong client relationships 
        through unique and innovative web design solutions. In his free time, he enjoys dream pop and indie music.`,
    },
    {
        id: "mosthafa-hosseini",
        name: "Mosthafa Hosseni",
        title: "Co-Founder",
        image: "/images/team2.jpg",
        linkedin: "https://www.linkedin.com/in/mostafa-hosseini-4167b679/",
        description: `Mostafa Hosseini is a serial entrepreneur, and the co-founder of Milan Webonics. He is also a Canadian lawyer with corporate and startup concentration. He has knack in finding and investing in unique tech-start up. Mostafa is founder of Exilex Legal ( full automated Canadian immigration firm ) , Co-founder of LSG ( first Canadian Real Easte Investment management specialized in land development managing more than 300M asset) and also the founder of AdmittedZ ( first international student solution for admission and visa). Big fan of soccer and basketball and mostly spend his free time with family and friend experience new cuisines.`,
    },
    {
        id: "ali-mousavi",
        name: "Ali Mousavi",
        title: "Senior Developer",
        image: "/images/team3.jpg",
        linkedin: "https://www.linkedin.com/in/mostafa-hosseini-4167b679/",
        description: `Meet Ali Mousavi, a seasoned website programmer with a decade of experience in website development. He has worked with startups across Canada and even started his own, DocDrag, in the Netherlands, which he's run for the last two years. With a strong working relationship of three years with Exilex and Milan companies, Ali's expertise includes PHP, MySQL, JavaScript, Vue, Expressjs, Laravel, and many other server technologies. When he's not working, he loves learning more about programming, listening to podcasts on social programming and politics, and taking time to rest and recharge.`,
    },
    {
        id: "mostafa-kasemi",
        name: "Mostafa Kasemi",
        title: "Developer Of Visual Design",
        image: "/images/team4.jpg",
        linkedin: "https://www.linkedin.com/in/mostafa-hosseini-4167b679/",
        description: `Meet Mustafa Kazem Khani, a talented motion designer with experience in 2D and 3D graphics. He has collaborated with startups, studio companies, and renowned brands, including Dent and Tehran Municipality. Mustafa's expertise includes motion graphics, 3D posters, and icon and 3D splash screen rendering. In his free time, he enjoys expanding his knowledge of graphics and management and playing video games.`,
    },
    {
        id: "morteza-dashmir",
        name: "Morteza Dashmir",
        title: "Product Manager",
        image: "/images/team5.jpg",
        linkedin: "https://www.linkedin.com/in/mostafa-hosseini-4167b679/",
        description: `Morteza Dashmir is an accomplished Art Director and Graphic Artist with over 11 years of experience. With a graduate degree in Art Management from Istanbul Technical University, Morteza has collaborated with prestigious brands like Vodafone, Fusetea, JBL, and Carrefour, creating captivating visual identities through branding design, packaging design, and user interface design. His unwavering passion for creativity extends to his hobbies, including video games, books, podcasts, movies, and nature tours. Morteza's boundless imagination, strategic mindset, and artistic finesse make him a valuable asset to any team, leaving a lasting impact in the world of graphics.`,
    },
    {
        id: "arash-naghdi",
        name: "Arash Naghdi",
        title: "Content Writer Specialist",
        image: "/images/team6.jpg",
        linkedin: "https://www.linkedin.com/in/mostafa-hosseini-4167b679/",
        description: `Arash Naghdi is a creative content marketer with a passion for storytelling. As an English literature graduate, he uses his talent to inspire action and make people care. With over 5 years of experience in content marketing strategy, copywriting, and SEO, Arash knows what it takes to make brands meaningful. When he's not brainstorming ideas for content marketing, Arash can be found researching personal development topics, curling up with a good psychology book, or enjoying a cup of coffee.`,
    },
];

const Aboutus = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        document.body.style.overflow = "auto"; // ✅ Allow scrolling
        return () => {
            document.body.style.overflow = "hidden"; // ✅ Lock scrolling when leaving
        };
    }, []);

    return (
        
        <section className={styles.About}>
            {selectedMember ? (
                // Full-Page Profile View
                <div className={styles.ProfileView}>
                    <button className={styles.BackButton} onClick={() => setSelectedMember(null)}>← Back</button>
                    <img src={selectedMember.image} alt={selectedMember.name} className={styles.ProfileImage} />
                    <h1>{selectedMember.name}</h1>
                    <h2>{selectedMember.title}</h2>
                    {selectedMember.linkedin && (
                        <p><strong><a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></strong></p>
                    )}
                    <p>{selectedMember.description}</p>
                </div>
            ) : (
                // Team Grid View
                <>
                    <h2 >About Us</h2>
                    <div className={styles.Aboutus}>
                        <p>
                            Step into the world of Milan, the epicenter of a captivating digital presence where the intersection of cutting-edge 
                            tech and stunning design comes to life in the form of breathtaking websites.
                            <br /><br />
                            Our team of developers and designers specialize in using the latest programming infrastructure, imbuing them with 
                            visuals that wow the audience. Our dedicated support team is always on standby, ensuring that your website remains 
                            a true standout in the digital world. Join us and experience the magic of bespoke website design.
                        </p>
                    </div>

                    <div className={styles.TeamSection}>
                        <h1>Our #LovelyTeam</h1>
                        <p>Get to know the faces behind our award-winning work — Our powerhouse of creativity and talent.</p>
                        <div className={styles.TeamContainer}>
                            {teamMembers.map((member) => (
                                <div 
                                    key={member.id} 
                                    className={styles.TeamCard} 
                                    onClick={() => setSelectedMember(member)}
                                >
                                    <img src={member.image} alt={member.name} className={styles.TeamImage} />
                                    <p className={styles.TeamName}>
                                        {member.name} <br />
                                        <span className={styles.TeamTitle}>{member.title}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default Aboutus;
