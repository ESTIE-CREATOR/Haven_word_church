import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import MotionInView from "@/components/MotionInView";
import { PortfolioGallery } from "@/components/ui/portfolio-gallery";

const churchPhotos = [
  "/pictures/church_pictures/photo_2026-01-03_01-50-05.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-13.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-20.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-25.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-35.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-40.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-47.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-51-03.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-51-11.jpg",
];

const PhotoGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = churchPhotos.map((src, index) => ({
    src,
    alt: `Haven Word Church photo ${index + 1}`,
    title: `Photo ${index + 1}`,
  }));

  const openImage = (index: number) => {
    setSelectedImage(churchPhotos[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const next = (currentIndex + 1) % churchPhotos.length;
    setCurrentIndex(next);
    setSelectedImage(churchPhotos[next]);
  };

  const prevImage = () => {
    const prev = (currentIndex - 1 + churchPhotos.length) % churchPhotos.length;
    setCurrentIndex(prev);
    setSelectedImage(churchPhotos[prev]);
  };

  return (
    <>
      <section className="bg-gradient-to-b from-gray-900 to-black section-padding">
        <div className="container-custom">
          <MotionInView duration={0.8} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="heading-lg text-white">Haven Family</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Experience the joy, fellowship, and worship at Haven Word Church
            </p>
          </MotionInView>

          <PortfolioGallery
            images={images}
            archiveButton={{
              text: "View Gallery",
              href: "/gallery"
            }}
            onImageClick={openImage}
            className="min-h-0"
          />
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeImage}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
          <div className="relative">
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Church photo"
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
              {currentIndex + 1} / {churchPhotos.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallerySection;
