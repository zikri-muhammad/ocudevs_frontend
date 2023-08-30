import { getFirstProfile } from "@/collection/profileCollection";
import FeatureHero from "@/features/FeatureHero";
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

export default function Home({ profile, images }) {
  return (
    <LandingLayout>
      <FeatureHero profile={profile} images={images} />
      <FeatureTechStack />
    </LandingLayout>
  )
}
