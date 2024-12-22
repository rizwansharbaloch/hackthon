import Image from "next/image";

export default function Features() {
  return (
    <div className="py-16 px-4 bg-gray-50">
      {/* Image Section */}
      <div className="flex flex-col gap-12 items-center">
        {/* Image 1 */}
        <div className="relative w-4/5 md:w-3/4 lg:w-2/3">
          <Image
            src="/images/Inspirations.png" // Make sure the path starts with '/'
            alt="Feature 1"
            className="object-cover w-full h-auto rounded-lg"
            width={1200}  // Increased width (adjust as needed)
            height={675}  // Increased height (adjust as needed)
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-4/5 md:w-3/4 lg:w-2/3">
          <Image
            src="/images/Share.png" // Make sure the path starts with '/'
            alt="Feature 2"
            className="object-cover w-full h-auto rounded-lg"
            width={1200}  // Increased width (adjust as needed)
            height={675}  // Increased height (adjust as needed)
          />
        </div>
      </div>
    </div>
  );
}
