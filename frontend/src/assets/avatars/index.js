import image1 from "../avatars/1.png"
import image2 from "../avatars/2.png"
import image3 from "../avatars/3.png"
import image4 from "../avatars/4.png"
import image5 from "../avatars/5.png"
import image6 from "../avatars/6.png"
import image7 from "../avatars/7.png"
import image8 from "../avatars/8.png"
import image9 from "../avatars/9.png"
import image10 from "../avatars/10.png"
import image11 from "../avatars/11.png"
import image12 from "../avatars/12.png"
import image13 from "../avatars/13.png"
import image14 from "../avatars/14.png"
import image15 from "../avatars/15.png"
import image16 from "../avatars/16.png"


const avatars = [
    image1, image2, image3, image4, 
    image5, image6, image7, image8, 
    image9, image10, image11, image12,
    image13, image14,image15,image16,
]
const randomAvatar = () => avatars[Math.floor(Math.random() * 16)]

export default randomAvatar

