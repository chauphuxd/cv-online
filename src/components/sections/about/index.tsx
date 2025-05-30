import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@/components/share/animation-lottie";
import codingJSON from 'assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";

import GlowCard from "@/components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "@/components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.resolvedLanguage as "vi" | "en";

    const content = {
        vi: {
            title: "Tôi Là Ai?",
            introduction: "Xin chào, tôi là Phú Trần đến từ Đà Nẵng, Việt Nam.",
            education: "Tôi đã hoàn thành bằng Cử nhân Kỹ thuật Phần mềm tại Đại học Duy Tân",
            hobbies: "Ngoài lập trình, đây là những hoạt động khác mà tôi yêu thích!",
            hobbiesList: [
                "Chơi Game",
                "Đá bóng",
                "Du Lịch"
            ],
            quote: "Theo đuổi ước mơ là cách để bạn trở thành người vô gia cư ~.~",
            quoteAuthor: "--Jimmy O Yang",
            educationTitle: "Học Vấn",
            educationPeriod: "2021-2025",
            educationDegree: "Kỹ sư Phần mềm",
            educationSchool: "Đại học Duy Tân",
            findMe: "TÌM TÔI TẠI",
            contactMe: "Liên hệ với tôi"
        },
        en: {
            title: "Know Who",
            introduction: "Hi Everyone, I am Phu Tran from Da Nang, VietNam.",
            education: "I have completed Bachelor's degree in Software Engineer at Duy Tan University of Science and Technology",
            hobbies: "Apart from coding, some other activities that I love to do!",
            hobbiesList: [
                "Playing Games",
                "Football",
                "Travelling"
            ],
            quote: "Pursuing Your Dreams Is How You Become Homeless ~.~",
            quoteAuthor: "--Jimmy O Yang",
            educationTitle: "Education",
            educationPeriod: "2021-2025",
            educationDegree: "Software Engineer",
            educationSchool: "Duy Tan University of Science and Technology",
            findMe: "FIND ME ON",
            contactMe: "Contact me"
        }
    };

    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-2">{content[currentLanguage].title} <span className="brand-red">I'M</span> </h3>
                    <div>
                        <div>
                            <p>{content[currentLanguage].introduction}</p>
                            <p>{content[currentLanguage].education}</p>
                        </div>
                    </div>
                    <div>
                        <p>{content[currentLanguage].hobbies}</p>
                        <ul>
                            {content[currentLanguage].hobbiesList.map((hobby, index) => (
                                <li key={index}>{hobby}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">"{content[currentLanguage].quote}"</p>
                        <p className="text-center brand-red">{content[currentLanguage].quoteAuthor}</p>
                    </div>
                </Col>
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">{content[currentLanguage].educationTitle}</h4></div>
                        <div>
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>{content[currentLanguage].educationPeriod}</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">{content[currentLanguage].educationDegree}</p>
                                                <p className="company">{content[currentLanguage].educationSchool}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">{content[currentLanguage].findMe}</h3>
                    <SocialMedia
                        youtube={APP_DATA.YOUTUBE_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        tiktok={APP_DATA.TIKTOK_URL}
                    />
                </Col>
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">{content[currentLanguage].contactMe}</h4>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;