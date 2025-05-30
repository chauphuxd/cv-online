import { FaFacebook } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

interface IProps {
    youtube: string;
    tiktok: string;
    facebook: string;
}

const SocialMedia = (props: IProps) => {
    const { youtube, tiktok, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href="#" className="highlight" title="">
                <SiYoutubeshorts size={30} />
            </a>
            <a href="#" className="highlight" title="">
                <FaTiktok size={30} />
            </a>
            {/* <a href="#" className="highlight" title="">
                <SiUdemy size={30} />
            </a> */}
            <a href={facebook} target='_blank' className="highlight" title="Facebook Trần Châu Phú">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;