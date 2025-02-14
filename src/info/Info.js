import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(37,150,190)", "rgb(0, 212, 255)"]; 
// Updated gradient to match your preferred colors

export let singlePage = false;

export const info = {
    firstName: "Samer",
    lastName: "Taieb",
    initials: "Samer Taieb", // Updated initials
    position: "Full Stack Developer | React.js | Node.js | Angular",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    
    miniBio: [ 
        { emoji: '☕', text: 'Fueled by coffee & innovation' },
        { emoji: '🌍', text: 'Based in Tunisia' },
        { emoji: "💼", text: "Software Engineer at Seniatna" },
        { emoji: "📧", text: "taieb.samer@outlook.fr" }
    ],
    
    socials: [
        {
            link: "https://github.com/samer-taieb",
            icon: "fa fa-github",
            label: "GitHub"
        },
        {
            link: "https://www.linkedin.com/in/samertaieb/",
            icon: "fa fa-linkedin",
            label: "LinkedIn"
        }
    ],

    bio: "Hello! I'm Samer, a passionate Full Stack Developer with expertise in web & mobile development. I specialize in React.js, React Native, Angular, and Node.js. With experience in building scalable applications for startups and enterprises, I enjoy turning ideas into high-quality software solutions.",

    skills: {
        proficientWith: [
            'React.js', 'React Native', 'Angular', 'Node.js', 
            'TypeScript', 'JavaScript', 'Git', 'GitHub', 
            'MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 
            'AWS (EC2, Lambda)', 'Tailwind CSS', 'SCSS'
        ],
        exposedTo: ['GraphQL', 'Jenkins', 'Odoo 15', 'Firebase']
    },

    hobbies: [
        { label: 'Coding & Open Source', emoji: '💻' },
        { label: 'Tech Blogging', emoji: '📝' },
        { label: 'Reading & Learning', emoji: '📖' },
        { label: 'Gaming & Esports', emoji: '🎮' }
    ],

    portfolio: [
        {
            title: "Ruwa - Empowering Rural Women",
            live: "https://play.google.com/store/apps/details?id=com.seniatna.ruwa&pcampaignid=web_share", // Replace with real live link if available
            environment: "React Native, Expo, TypeScript,NodeJS, MongoDB, ExpressJs, Github, Docker, Sentry,odoo15",
            image: mock1
        },
        {
            title: "DeepVolt - location intelligence assistant",
            live: "https://deepvolt.io", 
            environment: "NodeJS, Angular, AWS EC2,PostgreSQL, Github, Sequelize, PostGIS, Jenkins, Docker",
            image: mock2
        },
        {
            title: "SERP - Seniatna ERP",
            // live: "https://databiz.com",
            environment: "Odoo 15, Python, PostgreSQL, Nginx, OVH VPS, Docker, Let's Encrypt SSL",
            image: mock3
        },
        {
            title: "Magic beauty ",
            live: "https://magicbeauty.tn",
            environment: "WooCommerce, WordPress, PHP, MySQL, Apache, IONOS Hosting, Cloudflare SSL, Elementor",
            image: mock4
        },
        {
            title: "Seniatna Website",
            live: "https://seniatna.tn",
            // source: "https://github.com/samer-taieb/portfolio",
            environment: "WooCommerce, WordPress, PHP, MySQL, Apache, IONOS Hosting, Cloudflare SSL, Elementor",

            image: mock5
        }
    ]
};
