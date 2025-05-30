import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

interface SocialMediaProps {
    youtube?: string;
    facebook?: string;
    tiktok?: string;
}

const SocialMedia = ({ youtube, facebook, tiktok }: SocialMediaProps) => {
    return (
        <div className="d-flex gap-3">
            {youtube && (
                <Link to={youtube} target="_blank">
                    <FaYoutube size={24} />
                </Link>
            )}
            {facebook && (
                <Link to={facebook} target="_blank">
                    <FaFacebook size={24} />
                </Link>
            )}
            {tiktok && (
                <Link to={tiktok} target="_blank">
                    <FaTiktok size={24} />
                </Link>
            )}
        </div>
    )
}

export default SocialMedia; 