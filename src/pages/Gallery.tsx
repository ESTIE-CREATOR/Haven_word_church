import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import StellarCardGallerySingle from "@/components/ui/3d-image-gallery";

const GalleryLoadingFallback = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold mb-2">Loading Gallery...</h2>
        <p className="text-gray-400">Please wait while we load the 3D gallery</p>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <TubelightHeader />
      <main className="flex-grow">
        <Suspense fallback={<GalleryLoadingFallback />}>
          <StellarCardGallerySingle />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
