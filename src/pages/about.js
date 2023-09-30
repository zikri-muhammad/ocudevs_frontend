import { getFirstAbout } from "@/collection/aboutCollection";
import { getAllEducation } from "@/collection/educationCollection";
import { getAllWorkExperiences } from "@/collection/workExperienceCollection";
import FeatureAboutMe from "@/features/FeatureAboutMe";
import FeatureEducation from "@/features/FeatureEducation";
import FeatureWorkExperiences from "@/features/FeatureWorkExperiences";
import LandingLayout from "@/layouts/LandingLayout";

export async function getServerSideProps() {
    return {
        props: {
            about: await getFirstAbout(),
            experiences: await getAllWorkExperiences(),
            education: await getAllEducation()
        }
    }
}

export default function AboutPage({ about, experiences, education }) {
    return (
        <LandingLayout>
            <section className="w-full py-16">
                <div className="container mx-auto font-poppins px-8 md:px-16">
                    <div className="max-w-2xl space-y-16">
                        <FeatureAboutMe source={about} />
                        <FeatureWorkExperiences source={experiences} />
                        <FeatureEducation source={education} />
                    </div>
                </div>
            </section>
        </LandingLayout>
    )
}