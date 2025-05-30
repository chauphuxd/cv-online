import { Col, Row } from "react-bootstrap";
import AnimationLottie from '@/components/share/animation-lottie';
import experienceJSON from 'assets/lottie/code.json'
import { EXPERIENCES } from 'helpers/data'
import GlowCard from "@/components/share/glow-card";
import { BsPersonWorkspace } from "react-icons/bs";
import blurImg from 'assets/blur-23.svg'
import { useCurrentApp } from "components/context/app.context";
import { useTranslation } from "react-i18next";

type TLanguage = "vi" | "en"

const Experience = () => {
    const { theme } = useCurrentApp();
    const { t, i18n } = useTranslation();
    const currenLanguage = (i18n.resolvedLanguage!) as TLanguage;
    return (
        <Row className="mb-5">
            <Col xs={12} className="my-3 my-md-5">
                <div className="text-center">
                    <h3>{t("experience.title")}</h3>
                </div>
            </Col>
            <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                <AnimationLottie animationPath={experienceJSON} />
            </Col>
            <Col md={6} xs={12}>
                <div className="d-flex flex-column gap-5">
                    {
                        EXPERIENCES.map(experience => (
                            <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                                <div className="p-3 relative">
                                    {theme === "dark" &&
                                        <img
                                            style={{ position: "absolute", bottom: 0, opacity: 0.8 }}
                                            src={blurImg}
                                            alt="Hero"
                                            width={"100%"}
                                            height={200}
                                        />
                                    }
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>{experience.duration[currenLanguage]}</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <BsPersonWorkspace size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">{experience.title[currenLanguage]}</p>
                                                <p className="company">{experience.company[currenLanguage]}</p>
                                            </div>
                                        </div>
                                        <div className="description mt-3">
                                            <ul className="list-unstyled">
                                                {experience.description[currenLanguage].map((item, index) => (
                                                    <li key={index} className="mb-2">
                                                        <i className="fas fa-check-circle me-2"></i>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="technologies mt-3">
                                            <div className="d-flex flex-wrap gap-2">
                                                {experience.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="badge bg-primary bg-opacity-10 text-primary px-3 py-2"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        ))
                    }
                </div>
            </Col>
        </Row>
    )
}

export default Experience;
