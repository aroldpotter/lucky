import slack from "../images/slack.png";
import telegram from "../images/telegram.png";
import git from "../images/git.png";
import teams from "../images/teams.png";
import discord from "../images/discord.png";
import web from "../images/web.png";
import web3 from "../images/w3.png";
import mobile from "../images/mobile.png";
import bot from "../images/bot.png";
import shopify from "../images/shopify.png";
import gmail from "../images/gmail.png";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import img8 from "../images/8.png";
import img9 from "../images/9.png";
import img10 from "../images/10.png";
import img11 from "../images/11.png";
import img12 from "../images/12.png";
import img13 from "../images/13.png";
import img14 from "../images/14.png";
import img15 from "../images/15.png";
import img16 from "../images/16.png";
import img17 from "../images/17.png";
import img18 from "../images/18.png";


export interface ILinkData {
  link: string;
  text: string;
  address?: string;
}

export interface ISkill {
  logo_path: string;
  title: string;
  text: string;
  index?: number;
}

export const linkData: Array<ILinkData> = [
  // {
  //   link: git,
  //   text: "GitHub"
  // },

  {
    link: gmail,
    text: "Gmail",
    address: "luckymy1004@gmail.com"
  },
  {
    link: slack,
    text: "Slack",
    address: "luckymy1004@gmail.com"
  },
  {
    link: telegram,
    text: "telegram",
    address: "herakles0910"
  },
  {
    link: discord,
    text: "Discord",
    address: "jameslee981129"
  }
]

export const SkillData: Array<ISkill> = [
  {
    logo_path: web,
    title: "Web Development",
    text: `Dynamic Single Page Applications (SPAs) created using React and
                  Vue.js, focusing on exceptional user experiences and seamless
                  performance across devices.`
  },
  {
    logo_path: web3,
    title: "Web_3",
    text: `Web3 projects enhanced by building a unified platform for 
            managing social accounts, crypto addresses, name services, and NFT 
            collections, ensuring security and user accessibility.`
  },
  {
    logo_path: mobile,
    title: "Mobile Apps",
    text: `Professional mobile applications developed for iOS and Android, 
            employing best practices to deliver optimized performance and 
            engaging user experiences.`
  },
  {
    logo_path: shopify,
    title: "Shopify Theme & App",
    text: `We focus on enhancing your store design, functionality, and user 
            engagement with custom Shopify themes and apps built with Liquid, 
            JavaScript, and APIs.`
  },
  {
    logo_path: bot,
    title: "MiniApp & Bot",
    text: `Telegram MiniApps and Discord Bots created with Node.js 
            and Python, specializing in API integration and real-time data 
            processing to boost user engagement.`
  },
]

export const ListData: Array<string> = ["All", "BlockChain", "Web", "Mobile", "MiniApp & Bot", "Shopify"]

export interface IProject {
  path: string;
  title: string;
  stack: string;
  text: string;
  link?: string;
  category?: string;
}

export const ProjectData: Array<IProject> = [
  {
    path: img1,
    title: "Sage-D-Marketing",
    stack: "React | Tailwindcss",
    text: "Sage-D-Marketing Group crafts bold brands and transformative solutions.",
    category: "Web",
    link: "https://sagedmarketing.co.za/"
  },
  {
    path: img2,
    title: "Millstreet Energy",
    stack: "React.JS | Tailwindcss | Node.JS ",
    text: " Funeral-home app help users to plan their future with inner-peace.",
    category: "Web",
    link: "https://millstreetenergy-p.vercel.app/"
  },
  {
    path: img3,
    title: "Funeral-Home App",
    stack: "React Native | MongoDB | Node.JS | Ios",
    text: " Funeral-home app help users to plan their future with inner-peace.",
    category: "Mobile",
    link: "https://drive.google.com/file/d/1_2J2OHl_MWdBmqZtPtquoSavHXIFwxIK/view?usp=drive_link"
  },
  {
    path: img15,
    title: "Trendmarck",
    stack: "Shopify",
    text: "Live Shopify store selling rugs and doormats. This link leads directly to a product collection page—likely a home decor brand using Shopify with a custom domain.",
    category: "Shopify",
    link: "https://trendmarck.com/collections/rugs-doormats"
  },
  {
    path: img4,
    title: "NFT Game",
    stack: "Web3 | Solidity | React",
    text: "The first cross-IP PvP game for the NFT universe.",
    category: "BlockChain",
    link: "https://galaxyfightclub.com/"
  },
  {
    path: img14,
    title: "Obik",
    stack: "Shopify",
    text: "Demo for the 'Obik' theme — modern, minimalist layout for fashion or apparel. Clean grid, bold imagery, responsive design. Appears twice in your list.",
    category: "Shopify",
    link: "https://obik-theme.myshopify.com/"
  },
  {
    path: img5,
    title: "Birb Swap",
    stack: "Solana | Rust | Next JS | Web3",
    text: "Earn BIRB by staking, winning lotteries, and participating in Pools!",
    category: "BlockChain",
    link: "https://birbswap.finance/"
  },
  {
    path: img6,
    title: "Niftydues",
    stack: "Ethereum | IPFS | Next JS",
    text: "Fully customizable NFT collectible on the Ethereum blockchain.",
    category: "BlockChain",
    link: "https://niftydudes.com/"
  },
  {
    path: img7,
    title: "Clean Creations",
    stack: "Web Development | Vue JS | Node JS",
    text: "New Orleans Healthy Gourmet Meal Prep & Delivery.",
    category: "Web",
    link: "https://cleancreations.com/"
  },
  {
    path: img17,
    title: "Father Rabbit",
    stack: "Shopify",
    text: "New Zealand-based Shopify store for curated homeware, lifestyle products, and books. Stylish design, clean grid layout, and brand-focused content.",
    category: "Shopify",
    link: "https://fatherrabbit.com/"
  },
  {
    path: img18,
    title: "Puravidabracelets",
    stack: "Shopify",
    text: "A famous Shopify Plus brand selling handmade bracelets and accessories. Pura Vida is often used as a case study for high-volume Shopify performance.",
    category: "Shopify",
    link: "https://www.puravidabracelets.com/"
  },
  {
    path: img8,
    title: "Zeit Kapsel",
    stack: "React JS | Three JS | WebVR | Virtual Reality",
    text: "WDR Zeitkapsel - Virtual Reality direkt im Browser.",
    category: "Web",
    link: "https://zeitkapsel.wdr.de/"
  },
  {
    path: img9,
    title: "DeFiTankLand",
    stack: "React | Node | Blockchain | unity",
    text: " blockchain-based battle royale game focused on team play.",
    category: "BlockChain",
    link: "https://defitankland.netlify.app/"
  },
  {
    path: img16,
    title: "agile",
    stack: "Shopify",
    text: "The 'Gorde' theme — premium look, suitable for luxury or home décor stores. Typically includes homepage sliders, featured collections, and stylish typography.",
    category: "Shopify",
    link: "https://agile-default.myshopify.com/"
  },
  {
    path: img10,
    title: "Aviator",
    stack: "React JS | Express JS | Mongo DB",
    text: "Dive into the world of Aviator, where every flight is a new chance to win big!",
    category: "Web",
    link: "https://aviator-demo.spribegaming.com/?currency=USD&operator=demo&jurisdiction=CW&lang=EN&return_url=https%3A%2F%2Fspribe.co%2Fgames&user=26296&token=OfjHZVqA3o1XPpJj5HtOh2MB2xMrl6pT"
  },
  {
    path: img11,
    title: "Tricktionary",
    stack: "Mobile | React Native | Node.JS",
    text: "Cutting-edge windsurf coaching platform for everyone.",
    category: "Mobile",
    link: "https://play.google.com/store/apps/details?id=com.Tricktionary"
  },
  {
    path: img12,
    title: "Discord Bot For Solana Web3",
    stack: "Discord API | Solana Web3 | Node JS | Raydium",
    text: "Monitor Solana token swaps and trade with our efficient bot.",
    category: "MiniApp & Bot",
    link: "#"
  },
  {
    path: img13,
    title: "Play with Dragon & Earn",
    stack: "Solana | Ton | Telegraf",
    text: "Enter Dragonz Land to grow your dragon, collect Hero Cards, and earn Dragonz Gold!",
    category: "MiniApp & Bot",
    link: "https://t.me/dragonz_land_bot"
  },
]