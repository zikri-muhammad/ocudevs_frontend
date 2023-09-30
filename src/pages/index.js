import { getFirstProfile } from "@/collection/profileCollection";
import FeatureCounter from "@/features/FeatureCounter";
import FeatureHero from "@/features/FeatureHero";
import FeatureProject from "@/features/FeatureProject";
import FeatureTechStack from "@/features/FeatureTechStack";
import LandingLayout from "@/layouts/LandingLayout";
import { getPhotoProfile } from "@/storage/profileStorage";

export async function getServerSideProps() {
  
  return {
    props: {
      profile : await getFirstProfile() || null,
      images: await getPhotoProfile()
    }
  }
}

export default function HomePage({ profile, images }) {
  return (
    <LandingLayout>
      <FeatureHero profile={profile} images={images} />
      <FeatureTechStack />
      <FeatureProject />
    </LandingLayout>
  )
}
